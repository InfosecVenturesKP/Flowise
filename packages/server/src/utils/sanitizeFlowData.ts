import { INodeParams } from 'flowise-components'
import { IReactFlowObject } from '../Interface'

const SENSITIVE_HEADER_KEYS = new Set(['authorization', 'x-api-key', 'x-auth-token', 'cookie'])

// Input names that carry the flow's prompt / instruction text. These are never
// needed by the embed chat widget and disclose the bot's system prompt and
// guardrail logic, so they are stripped from the public payload.
const SENSITIVE_PROMPT_KEYS = new Set([
    'systemMessage',
    'systemMessagePrompt',
    'humanMessage',
    'humanMessagePrompt',
    'chatPromptTemplate',
    'template',
    'promptValues',
    'prompt',
    'messages',
    'agentMessages',
    'workerPrompt',
    'supervisorPrompt'
])

/**
 * Sanitizes flowData before returning it from a public endpoint.
 * Strips password/file/folder inputs, prompt/instruction text, credential ID
 * references, and auth-related HTTP headers so neither sensitive credentials
 * nor the bot's system prompt are exposed.
 */
export const sanitizeFlowDataForPublicEndpoint = (flowDataString: string): string => {
    if (!flowDataString) return flowDataString
    try {
        const flowData: IReactFlowObject = JSON.parse(flowDataString)
        if (!Array.isArray(flowData.nodes)) return flowDataString

        for (const node of flowData.nodes) {
            if (!node.data) continue

            // Remove credential ID reference
            delete node.data.credential

            const inputs = node.data.inputs

            if (!inputs) continue
            const inputParams: INodeParams[] = node.data.inputParams ?? []

            const sanitizedInputs: Record<string, unknown> = {}
            for (const key of Object.keys(inputs)) {
                const param = inputParams.find((p) => p.name === key)

                if (param && (param.type === 'password' || param.type === 'file' || param.type === 'folder')) {
                    continue
                }

                // Strip prompt / instruction text regardless of declared param type
                // (e.g. systemMessagePrompt is type 'string'). The embed widget does
                // not consume these; exposing them leaks the bot's system prompt.
                if (SENSITIVE_PROMPT_KEYS.has(key)) {
                    continue
                }

                if (key === 'headers' && inputs[key]) {
                    try {
                        const rawHeaders = inputs[key]
                        // Array format: [{ key: string, value: string }, ...] (e.g. HTTP agentflow node)
                        if (Array.isArray(rawHeaders)) {
                            sanitizedInputs[key] = rawHeaders.filter(
                                (h: { key?: string; value?: string }) => !h.key || !SENSITIVE_HEADER_KEYS.has(h.key.toLowerCase())
                            )
                            continue
                        }
                        // Object/string format: Record<string, string> or JSON string thereof
                        const headers: Record<string, string> =
                            typeof rawHeaders === 'string' ? JSON.parse(rawHeaders) : { ...(rawHeaders as object) }
                        for (const h of Object.keys(headers)) {
                            if (SENSITIVE_HEADER_KEYS.has(h.toLowerCase())) delete headers[h]
                        }
                        sanitizedInputs[key] = typeof rawHeaders === 'string' ? JSON.stringify(headers) : headers
                        continue
                    } catch {
                        // Drop headers that cannot be parsed
                        continue
                    }
                }

                sanitizedInputs[key] = inputs[key]
            }
            node.data.inputs = sanitizedInputs

            // The prompt text can also surface through inputParams scaffolding
            // (default/placeholder). Blank these for prompt-bearing params so no
            // configured prompt content leaks via the node schema.
            for (const param of inputParams) {
                if (param && SENSITIVE_PROMPT_KEYS.has(param.name)) {
                    if ('default' in param) delete (param as { default?: unknown }).default
                    if ('placeholder' in param) delete (param as { placeholder?: unknown }).placeholder
                }
            }
        }

        return JSON.stringify(flowData)
    } catch {
        return JSON.stringify({ nodes: [], edges: [] })
    }
}
