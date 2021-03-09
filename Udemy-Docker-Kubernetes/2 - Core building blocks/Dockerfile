# Define the base image

FROM node

# Define the Working Directory for inside the docker container

WORKDIR /app

# Copy all files in current dir to app dir in docker container

COPY . /app

# Install the npm dependencies

RUN npm install

# Optional Command: Expose the port 80 for your Node JS (Documentation purpose only)

EXPOSE 80

# Run the server.js

CMD ["node", "server.js"]