# Step 1: Use an official Node.js runtime as a parent image
FROM node:21-alpine3.18

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Build the Next.js app
RUN npm run build


EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]


FROM node:latest

WORKDIR /

COPY package*.json ./

RUN npm install


COPY . .


EXPOSE 3000

CMD ["npm", "start"]

