FROM node:16-alpine
RUN mkdir -p /app
WORKDIR /app
COPY ./frontend/adoptit-front/package*.json ./
RUN npm install
COPY ./frontend/adoptit-front/ .
RUN npm run build
EXPOSE $PORT
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=$PORT
ENV PROXY_API=$PROXY_API
ENV PROXY_LOGIN=$PROXY_LOGIN
CMD [ "npm", "start" ]

#FROM node:16-alpine
#WORKDIR /app
#COPY . .
#WORKDIR ./frontend/adoptit-front/package*.json
#RUN npm install
#RUN npm run ng build
#COPY . ./
#EXPOSE 4200
#CMD ["npm", "start"]

# # stage 1
# FROM node as node
# WORKDIR /app
# COPY . .
# WORKDIR ./frontend/adoptit-front/package*.json
# RUN npm install
# RUN npm run ng build

# # stage 2
# FROM nginx:alpine
# COPY ./frontend/adoptit-front/nginx.conf /etc/nginx/nginx.conf
# COPY --from=node ./frontend/adoptit-front/app/dist/* /usr/share/nginx/html


