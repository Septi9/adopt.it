FROM node:16-alpine as build
# WORKDIR /app
# COPY ./package*.json ./
# RUN npm install
# COPY . ./
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
WORKDIR ./
RUN npm run build
COPY . ./
CMD ["npm", "start"]



