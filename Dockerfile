# Stage 1: Compile TypeScript to JavaScript
FROM node:18 AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies, including 'devDependencies'
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build


# Stage 2: Setup production environment
FROM node:18

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the compiled JavaScript from the builder stage
COPY --from=builder /usr/src/app/dist ./dist


# Set the command to start your app
CMD [ "npm", "start" ]
