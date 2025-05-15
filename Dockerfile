# Dockerfile para Elastic Beanstalk
FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Generate Prisma client with the correct binary targets
RUN npx prisma generate

# Build the application
RUN pnpm build

# Expose the port
EXPOSE 8080

# Start the server
CMD ["node", "dist/src/main"]