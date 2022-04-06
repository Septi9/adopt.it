FROM node:16
RUN mkdir -p /app
WORKDIR /app
COPY . ./
RUN npm install --force
RUN npm run build
CMD ["npm", "start"]


