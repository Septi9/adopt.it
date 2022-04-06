#FROM node:latest
#RUN mkdir -p /app
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#RUN npm run build
#COPY . ./
#CMD ["npm", "start"]

FROM node:latest AS build
WORKDIR /app
COPY . ./
COPY package*.json ./

RUN npm install -g @angular/cli@13.0.2 && \
    npm install && \
    ng build
COPY . .

FROM nginx:1.17.1-alpine
WORKDIR /app
COPY --from=build /app/dist/ui /usr/share/nginx/html
