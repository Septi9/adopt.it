FROM node:16-alpine as build
WORKDIR ./
# COPY ./package*.json ./
COPY ./ ./
RUN npm install

WORKDIR ./
RUN npm run build
COPY . ./
CMD ["npm", "start"]



