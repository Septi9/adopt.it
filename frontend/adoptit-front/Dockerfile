#FROM node:16-alpine
#WORKDIR /app
#COPY . .
#WORKDIR ./frontend/adoptit-front/package*.json
#RUN npm install
#RUN npm run ng build
#COPY . ./
#EXPOSE 4200
#CMD ["npm", "start"]

FROM node:16.13-alpine
RUN mkdir -p ./frontend/adoptit-front/app
WORKDIR ./frontend/adoptit-front/app
COPY ./frontend/adoptit-front/package*.json ./
RUN npm install -g npm@8.10.0
RUN npm install
COPY . .
#WORKDIR ./frontend/adoptit-front/package*.json
RUN npm run build
CMD [ "npm", "start" ]



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


