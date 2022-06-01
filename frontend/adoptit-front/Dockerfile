FROM node:16.13-alpine
RUN mkdir -p ./frontend/adoptit-front/app
WORKDIR ./frontend/adoptit-front/app
COPY . .
WORKDIR ./frontend/adoptit-front/package*.json ./
RUN npm install
COPY . .
RUN npm run ng build
EXPOSE 4200
CMD [ "npm", "start" ]




