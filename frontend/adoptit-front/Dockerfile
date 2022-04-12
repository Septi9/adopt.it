# stage 1
FROM node as node
WORKDIR /app
COPY . .
WORKDIR ./frontend/adoptit-front/package*.json
RUN npm install
RUN npm run ng build

# stage 2
FROM nginx:alpine
COPY ./frontend/adoptit-front/nginx.conf /etc/nginx/nginx.conf
COPY --from=node ./frontend/adoptit-front/dist/adoptit-front /usr/share/nginx/html

#FROM node:16-alpine as build
#WORKDIR /app
#COPY ./package*.json ./
#RUN npm install
#COPY . ./
#WORKDIR ./
#RUN npm run build
#COPY . ./
#CMD ["npm", "start"]
