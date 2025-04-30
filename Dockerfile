FROM node:20.12.0-alpine3.19

# Set working directory
WORKDIR /src/app

# Copy only package files first for better caching
COPY package.json package-lock.json ./  

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build your Next.js app
RUN npm run build

# Start the app
CMD ["npm", "run", "start"]
