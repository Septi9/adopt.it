FROM node:latest
WORKDIR ./adoptit-front
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]

