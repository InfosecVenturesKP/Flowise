# Flowise Docker Hub Image

Starts Flowise from [DockerHub Image](https://hub.docker.com/r/flowiseai/flowise)

## Usage

### Using Remote Image (Default)

1. Create `.env` file and specify the `PORT` (refer to `.env.example`)
2. `docker compose up -d`
3. Open [http://localhost:3000](http://localhost:3000)
4. You can bring the containers down by `docker compose stop`

### Using Local Development Image

If you've made changes to the codebase and want to test them, follow these steps:

1. **Build the local image** from the root directory:
   ```bash
   cd .. # Go back to project root
   docker build --no-cache -t flowise-local .
   ```

2. **Update docker-compose.yml** to use the local image:
   ```yaml
   services:
       flowise:
           image: flowise-local:latest  # Changed from flowiseai/flowise:latest
   ```

3. **Run with local image**:
   ```bash
   docker compose up -d
   ```

4. **To switch back to remote image**:
   ```yaml
   services:
       flowise:
           image: flowiseai/flowise:latest  # Back to remote image
   ```

### Using PostgreSQL Database

For production or development with PostgreSQL, update your `.env` file:

```bash
PORT=3000
DATABASE_TYPE=postgres
DATABASE_PORT=5432
DATABASE_HOST=host.docker.internal
DATABASE_NAME=flowise_new
DATABASE_USER=boparaiamrit
DATABASE_PASSWORD=
DATABASE_PATH=/root/.flowise
LOG_PATH=/root/.flowise/logs
SECRETKEY_PATH=/root/.flowise
BLOB_STORAGE_PATH=/root/.flowise/storage
LOG_LEVEL=info
DISABLE_FLOWISE_TELEMETRY=true
```

**Note**: `host.docker.internal` is used to connect from Docker container to PostgreSQL running on the host machine.

## 🌱 Env Variables

If you like to persist your data (flows, logs, credentials, storage), set these variables in the `.env` file inside `docker` folder:

-   DATABASE_PATH=/root/.flowise
-   LOG_PATH=/root/.flowise/logs
-   SECRETKEY_PATH=/root/.flowise
-   BLOB_STORAGE_PATH=/root/.flowise/storage

Flowise also support different environment variables to configure your instance. Read [more](https://docs.flowiseai.com/configuration/environment-variables)

## Queue Mode:

### Building from source:

You can build the images for worker and main from scratch with:

```
docker compose -f docker-compose-queue-source.yml up -d
```

Monitor Health:

```
docker compose -f docker-compose-queue-source.yml ps
```

### From pre-built images:

You can also use the pre-built images:

```
docker compose -f docker-compose-queue-prebuilt.yml up -d
```

Monitor Health:

```
docker compose -f docker-compose-queue-prebuilt.yml ps
```
