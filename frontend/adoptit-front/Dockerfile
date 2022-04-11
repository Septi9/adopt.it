FROM node:14.17.6 as build
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . ./
WORKDIR ./
RUN npm run build
COPY . ./
CMD ["npm", "start"]
