# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
pnpm install
```

## Local Development

### Option 1: With Node/pnpm installed

```bash
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Option 2: With Docker (no Node installation required)

If you don't have Node.js installed locally, you can use Docker:

```bash
# Build the Docker image
docker build -t gc-docs .

# Run the development server with hot-reloading
docker run -p 3000:3000 \
  -v $(pwd)/docs:/app/docs \
  -v $(pwd)/src:/app/src \
  -v $(pwd)/static:/app/static \
  -v $(pwd)/docusaurus.config.ts:/app/docusaurus.config.ts \
  -v $(pwd)/sidebars.ts:/app/sidebars.ts \
  gc-docs
```

Then open http://localhost:3000 in your browser. Any changes to your docs will automatically hot-reload!

## Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true pnpm deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
