# Stage 1: Use a smaller base image for building
FROM node:14-alpine as builder

WORKDIR /build

# Copy only package.json and package-lock.json to take advantage of Docker layer caching
COPY server/package*.json ./

# Install only production dependencies
RUN npm install --production

# Stage 2: Create a lightweight runtime image
FROM node:14-alpine

WORKDIR /app

# Copy only necessary files from the builder image
COPY --from=builder /build/server/node_modules ./server/node_modules
COPY . .

# Expose the port
EXPOSE 8080

# Set environment variables (if needed)
# ENV NODE_ENV production

# Start the application
CMD ["npm", "start"]
