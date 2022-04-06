FROM node:latest
RUN mkdir -p /app
WORKDIR /app
#COPY . ./
COPY package*.json ./
RUN npm install
RUN npm run build
CMD ["npm", "start"]


