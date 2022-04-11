FROM node:14-alpine as build
# WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . ./
WORKDIR ./
RUN npm run build
COPY . ./
CMD ["npm", "start"]



