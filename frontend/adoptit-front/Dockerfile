FROM node:latest
RUN mkdir -p /app
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm run build
COPY . ./
CMD ["npm", "start"]

