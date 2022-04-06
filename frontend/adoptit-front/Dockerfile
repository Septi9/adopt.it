FROM node:latest
RUN mkdir -p /app
WORKDIR ./app
COPY package*.json ./
COPY . .
CMD ["npm", "start"]

