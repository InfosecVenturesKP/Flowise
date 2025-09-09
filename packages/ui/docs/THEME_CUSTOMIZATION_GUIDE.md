# 🎨 Theme Customization Guide - Infosec Ventures Branding

This guide provides a comprehensive overview of customizing the Flowise UI theme and branding assets for Infosec Ventures.

## 📋 Table of Contents

1. [Theme System Overview](#theme-system-overview)
2. [Theme Variables Reference](#theme-variables-reference)
3. [Image Assets Reference](#image-assets-reference)
4. [Step-by-Step Customization Process](#step-by-step-customization-process)
5. [File Structure](#file-structure)
6. [Testing and Validation](#testing-and-validation)

---

## 🏗️ Theme System Overview

The Flowise UI uses a dual-theme system supporting both **Light** and **Dark** modes. The theme system is built on:

- **SCSS Variables**: Core color definitions
- **Material-UI Theme**: React component styling
- **SVG Assets**: Brand logos and illustrations
- **Component Overrides**: Custom styling for specific components

### Current Branding: Infosec Ventures
- **Primary Color**: Black (`#000000`) / White (`#ffffff`)
- **Accent Color**: Red (`#cc0000` - `#ff1744`)
- **Brand Name**: "INFOSEC VENTURES"

---

## 🎨 Theme Variables Reference

### Core Theme File
**Location**: `src/assets/scss/_themes-vars.module.scss`

### 1. Light Theme Variables

#### Primary Colors (Black Theme)
```scss
$primaryLight: #f5f5f5        // Light grey backgrounds
$primaryMain: #000000         // Pure black (main brand)
$primaryDark: #1a1a1a         // Dark grey
$primary200: #666666          // Medium grey
$primary800: #333333          // Darker grey
```

#### Secondary Colors (Red Theme)
```scss
$secondaryLight: #ffebee      // Light red backgrounds
$secondaryMain: #d50000       // Main red (strengthened)
$secondaryDark: #b71c1c       // Dark red
$secondary200: #ef5350       // Medium red
$secondary800: #cc0000        // Strong red
```

#### Accent Colors
```scss
$tealLight: #ffcdd2          // Light red variants
$tealMain: #ff1744           // Bright red (for visibility)
$tealDark: #d50000           // Strong dark red
```

### 2. Dark Theme Variables

#### Primary Colors (Dark Theme)
```scss
$darkPrimaryLight: #2a2a2a   // Dark grey backgrounds
$darkPrimaryMain: #000000    // Black main
$darkPrimaryDark: #191b1f    // Very dark grey
$darkPrimary200: #666666     // Medium grey
$darkPrimary800: #1a1a1a     // Dark grey
```

#### Secondary Colors (Dark Theme - Enhanced for Visibility)
```scss
$darkSecondaryLight: #4d0000  // Dark red background (sidebar)
$darkSecondaryMain: #ff1744   // Bright red (enhanced visibility)
$darkSecondaryDark: #ffffff   // White text on dark backgrounds
$darkSecondary200: #ff5722    // Vivid red variants
$darkSecondary800: #d50000    // Strong red
```

#### Text Colors (Dark Theme)
```scss
$darkTextTitle: #d7dcec      // Light text for titles
$darkTextPrimary: #bdc8f0    // Primary text color
$darkTextSecondary: #8492c4  // Secondary text color
```

### 3. Component-Specific Colors

#### Success Colors
```scss
$successLight: #cdf5d8
$success200: #69f0ae
$successMain: #00e676
$successDark: #00c853
```

#### Warning Colors
```scss
$warningLight: #fff8e1
$warningMain: #ffe57f
$warningDark: #ffc107
```

#### Error Colors
```scss
$errorLight: #ffebee
$errorMain: #f44336
$errorDark: #d32f2f
```

---

## 🖼️ Image Assets Reference

### 1. Logo Files
**Location**: `src/assets/images/`

#### Brand Logos
- `flowise_dark.svg` - Dark theme logo (white "INFOSEC" + red "VENTURES")
- `flowise_white.svg` - Light theme logo (black "INFOSEC" + red "VENTURES")
- `flowise_dark_old.svg` - Backup of original dark logo
- `flowise_white_old.svg` - Backup of original white logo

#### Favicon and App Icons
**Location**: `public/`
- `favicon.ico` - Website favicon
- `favicon-16x16.png` - 16px favicon
- `favicon-32x32.png` - 32px favicon
- `logo192.png` - 192px app icon
- `logo512.png` - 512px app icon

### 2. Empty State Illustrations
**Location**: `src/assets/images/`

All empty state SVGs use brand colors (`#cc0000` red):
- `agents_empty.svg`
- `api_empty.svg`
- `assistant_empty.svg`
- `chunks_empty.svg`
- `contact_support.svg`
- `credential_empty.svg`
- `doc_store_details_empty.svg`
- `doc_store_empty.svg`
- `empty_datasets.svg`
- `empty_evals.svg`
- `empty_evaluators.svg`
- `executions_empty.svg`
- `leads_empty.svg`
- `logs_empty.svg`
- `message_empty.svg`
- `prompt_empty.svg`
- `roles_empty.svg`
- `tools_empty.svg`
- `unauthorized.svg`
- `upsert_history_empty.svg`
- `users_empty.svg`
- `validate_empty.svg`
- `variables_empty.svg`
- `workflow_empty.svg`
- `workspaces_empty.svg`

### 3. UI Component Icons
**Location**: `src/assets/images/`

Brand-themed icons (updated to red):
- `embed.svg` - Code embed icon
- `key.svg` - API key icon
- `settings.svg` - Settings icon
- `tool.svg` - Tool icon

### 4. Brand-Specific Assets (DO NOT MODIFY)
**Location**: `src/assets/images/`

Third-party brand logos (keep original colors):
- `anthropic.svg`
- `auth0.svg`
- `azure_openai.svg`
- `github.svg`
- `google.svg`
- `microsoft-azure.svg`
- `mistralai.svg`
- `ollama.svg`
- `openai.svg`
- `python.svg`
- And other service provider logos

---

## 🔧 Step-by-Step Customization Process

### Phase 1: Update Theme Variables

1. **Open the main theme file**:
   ```
   src/assets/scss/_themes-vars.module.scss
   ```

2. **For Light Theme Updates**:
   ```scss
   // Update primary colors (your main brand color)
   $primaryMain: #YOUR_PRIMARY_COLOR
   
   // Update secondary colors (your accent color)
   $secondaryMain: #YOUR_ACCENT_COLOR
   $secondaryDark: #YOUR_DARK_ACCENT
   
   // Update accent variants
   $tealMain: #YOUR_ACCENT_COLOR
   $tealDark: #YOUR_DARK_ACCENT
   ```

3. **For Dark Theme Updates**:
   ```scss
   // Update dark theme colors for better visibility
   $darkSecondaryLight: #YOUR_DARK_BACKGROUND_ACCENT  // Sidebar selected items
   $darkSecondaryMain: #YOUR_BRIGHT_ACCENT           // Bright version for visibility
   $darkSecondaryDark: #ffffff                       // Keep white for text
   ```

### Phase 2: Update Logo Assets

1. **Create Logo Variants**:
   - Dark theme logo: White text + colored accent
   - Light theme logo: Dark text + colored accent

2. **Update Logo Files**:
   ```
   src/assets/images/flowise_dark.svg    // For dark backgrounds
   src/assets/images/flowise_white.svg   // For light backgrounds
   ```

3. **Replace Favicon and App Icons**:
   ```
   public/favicon.ico
   public/favicon-16x16.png
   public/favicon-32x32.png
   public/logo192.png
   public/logo512.png
   ```

### Phase 3: Update Empty State Illustrations

1. **Bulk Update SVG Colors**:
   ```bash
   # Find all SVGs with old brand color
   grep -r "#673ab7\|#6c63ff" src/assets/images/*.svg
   
   # Replace with new brand color
   sed -i 's/#673ab7/#YOUR_NEW_COLOR/g' src/assets/images/*_empty.svg
   sed -i 's/#6c63ff/#YOUR_NEW_COLOR/g' src/assets/images/*_empty.svg
   ```

2. **Update UI Component Icons**:
   - Only update generic UI icons
   - **DO NOT** modify third-party brand logos

### Phase 4: Update Sidebar Menu (if needed)

1. **Remove menu items** (if applicable):
   ```
   src/menu-items/dashboard.js
   ```
   Comment out unwanted sections:
   ```javascript
   // {
   //     id: 'unwanted-section',
   //     title: 'Unwanted Section',
   //     // ... rest of config
   // },
   ```

### Phase 5: Remove Branding Elements (if needed)

1. **Remove GitHub star button**:
   ```
   src/layout/MainLayout/Header/index.jsx
   ```

2. **Remove version info**:
   ```
   src/layout/MainLayout/Header/ProfileSection/index.jsx
   ```

---

## 📁 File Structure

```
flowise/packages/ui/
├── docs/
│   └── THEME_CUSTOMIZATION_GUIDE.md      # This file
├── public/
│   ├── favicon.ico                       # Website favicon
│   ├── favicon-16x16.png                 # 16px favicon
│   ├── favicon-32x32.png                 # 32px favicon
│   ├── logo192.png                       # 192px app icon
│   └── logo512.png                       # 512px app icon
├── src/
│   ├── assets/
│   │   ├── images/                       # All SVG/image assets
│   │   │   ├── flowise_dark.svg          # Dark theme logo
│   │   │   ├── flowise_white.svg         # Light theme logo
│   │   │   ├── *_empty.svg               # Empty state illustrations
│   │   │   └── [third-party-logos].svg   # Brand logos (don't modify)
│   │   └── scss/
│   │       ├── _themes-vars.module.scss  # 🎯 MAIN THEME VARIABLES
│   │       └── style.scss                # Additional styles
│   ├── layout/
│   │   └── MainLayout/
│   │       ├── Header/                   # Header components
│   │       └── Sidebar/                  # Sidebar components
│   ├── menu-items/
│   │   └── dashboard.js                  # 🎯 MENU CONFIGURATION
│   └── themes/
│       ├── compStyleOverride.js          # Component style overrides
│       ├── index.js                      # Theme configuration
│       ├── palette.js                    # Color palette
│       └── typography.js                 # Typography settings
```

---

## 🧪 Testing and Validation

### 1. Visual Testing Checklist

- [ ] **Light Theme**: All colors display correctly
- [ ] **Dark Theme**: All colors have sufficient contrast
- [ ] **Sidebar**: Selected items are clearly visible
- [ ] **Logo**: Displays correctly in both themes
- [ ] **Empty States**: Use updated brand colors
- [ ] **UI Icons**: Updated to match brand
- [ ] **Third-party Logos**: Remain unchanged

### 2. Browser Testing

Test in multiple browsers:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### 3. Device Testing

Test on different devices:
- [ ] Desktop (various screen sizes)
- [ ] Tablet
- [ ] Mobile

### 4. Accessibility Testing

- [ ] **Contrast Ratios**: Meet WCAG 2.1 standards
- [ ] **Color Blindness**: Test with color blindness simulators
- [ ] **High Contrast Mode**: Test in system high contrast mode

---

## 🚀 Quick Reference for Future Updates

### Common Brand Color Changes

1. **Update main brand color**:
   ```scss
   // In _themes-vars.module.scss
   $primaryMain: #NEW_BRAND_COLOR
   ```

2. **Update accent color**:
   ```scss
   // In _themes-vars.module.scss
   $secondaryMain: #NEW_ACCENT_COLOR
   $tealMain: #NEW_ACCENT_COLOR
   ```

3. **Enhance dark theme visibility**:
   ```scss
   // Make colors brighter for dark backgrounds
   $darkSecondaryMain: #BRIGHT_VERSION_OF_ACCENT
   ```

4. **Update sidebar selection color**:
   ```scss
   // Dark background for selected items
   $darkSecondaryLight: #DARK_VERSION_OF_ACCENT
   ```

### Bulk SVG Color Updates

```bash
# Replace old purple brand color
find src/assets/images -name "*_empty.svg" -exec sed -i 's/#673ab7/#NEW_COLOR/g' {} \;

# Replace old blue brand color  
find src/assets/images -name "*_empty.svg" -exec sed -i 's/#6c63ff/#NEW_COLOR/g' {} \;
```

### Logo Updates

1. **Dark theme logo**: Update `flowise_dark.svg`
   - Text: White (`#ffffff`)
   - Accent: Brand color

2. **Light theme logo**: Update `flowise_white.svg`
   - Text: Black (`#000000`)
   - Accent: Brand color

---

## 📞 Support and Maintenance

### Key Files to Monitor
- `_themes-vars.module.scss` - Core theme variables
- `compStyleOverride.js` - Component styling
- Logo SVG files - Brand representation
- Empty state SVGs - Brand consistency

### Best Practices
1. **Always backup** original files before making changes
2. **Test both themes** (light and dark) after changes  
3. **Validate accessibility** with contrast checkers
4. **Keep third-party logos unchanged** to respect brand guidelines
5. **Document any custom changes** for future reference

---

*Last updated: [Current Date]*
*Version: 1.0 - Infosec Ventures Branding*
