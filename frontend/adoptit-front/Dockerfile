FROM node:latest
RUN mkdir -p /app
RUN chmod -R 777 /app
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm run build
COPY . ./
CMD ["npm", "start"]

