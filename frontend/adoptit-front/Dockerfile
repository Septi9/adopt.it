FROM node:latest
RUN mkdir -p /app
WORKDIR ./app
COPY package*.json ./
RUN npm run build
COPY . .
CMD ["npm", "start"]

