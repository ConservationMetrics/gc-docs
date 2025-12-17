FROM node:18-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Expose Docusaurus dev server port
EXPOSE 3000

# Start development server with hot-reload
CMD ["pnpm", "start", "--host", "0.0.0.0"]

