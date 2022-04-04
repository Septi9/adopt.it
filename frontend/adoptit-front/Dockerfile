#### Stage 1:
FROM node:latest as build
RUN mkdir -p /app
WORKDIR /app
#COPY package*.json ./
COPY . ./
RUN npm install
#ARG configuration=production
RUN npm run build
CMD ["npm", "start"]


