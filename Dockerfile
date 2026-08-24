FROM node:18-alpine

WORKDIR /app

# Install only production dependencies for smaller image
COPY package*.json ./
RUN npm ci --only=production

# Copy application server files
COPY server ./server
COPY server/models ./server/models

ENV NODE_ENV=production
EXPOSE 5000

CMD ["node", "server/index.js"]
