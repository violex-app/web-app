# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json pnpm-lock.yaml* /app/

# Install pnpm globally (you can remove this line if you have pnpm already installed globally)
RUN npm install -g pnpm

# Install project dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the container
COPY . /app/

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run your application
CMD ["pnpm", "run", "dev", "--host"]
