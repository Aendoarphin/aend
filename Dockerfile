# Multi-stage build for production optimization

# Build stage
FROM node:22.18.0-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the app (runs TypeScript compilation and Vite build)
RUN npm run build

# Production stage
FROM node:22.18.0-alpine AS production

# Set working directory
WORKDIR /app

# Install serve globally for serving static files
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 4173

# Start the application
CMD ["serve", "-s", "dist", "-l", "4173"]