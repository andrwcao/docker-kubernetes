# Specify base image
FROM node:14-alpine

WORKDIR /usr/app

# Copy build files
COPY ./package.json ./

# Install depenendencies
RUN npm install

# Copy build files
COPY ./ ./

# Default command
CMD ["npm", "start"]