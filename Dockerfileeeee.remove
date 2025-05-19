# Estágio de construção
FROM node:20-alpine AS builder

WORKDIR /app

# Instala pnpm e dependências
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copia e gera o cliente Prisma
COPY prisma ./prisma
RUN npx prisma generate

# Copia e constrói o aplicativo
COPY . .
RUN pnpm build

# Estágio de produção
FROM node:20-alpine

WORKDIR /app

# Copia apenas o necessário
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Variáveis de ambiente (substituídas pela Vercel)
ENV PORT=3000
ENV DATABASE_URL=${NEON_DATABASE_URL}?sslmode=require
ENV NODE_ENV=production

# Instala apenas produção no estágio final
RUN npm install -g pnpm && pnpm install --prod

EXPOSE 3000

# Comando de inicialização adaptado
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/src/main"]