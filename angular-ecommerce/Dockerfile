# Use an official Node.js image as the build environment
FROM node:latest as build-env

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular application
RUN npm run build

# Use the NGINX image for serving the application
FROM nginx:latest

# Copy the built Angular app from the build stage to the NGINX image
COPY --from=build-env /usr/src/app/dist/angular-ecommerce /usr/share/nginx/html

# Expose port 80 for NGINX
EXPOSE 4200 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
