FROM node:16-alpine as build
WORKDIR ./
COPY ./package*.json ./
RUN npm cache clear --force
RUN npm install
COPY . ./
WORKDIR ./
RUN npm run build
COPY . ./
CMD ["npm", "start"]
