# stage 1
FROM node as node
WORKDIR /app
<<<<<<< HEAD
COPY . .
RUN npm ci

RUN npm run ng build

# stage 2
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/adoptit-front /usr/share/nginx/html

#FROM node:16-alpine as build
#WORKDIR /app
#COPY ./package*.json ./
#RUN npm install
#COPY . ./
#WORKDIR ./
#RUN npm run build
#COPY . ./
#CMD ["npm", "start"]



=======
COPY ./package*.json ./
COPY . ./
CMD ["npm", "start"]
>>>>>>> 932747df3cf2b24afac1f69384c769dfdd30f862
