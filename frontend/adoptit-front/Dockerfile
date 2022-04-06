FROM node:latest
WORKDIR /app
COPY . .
RUN npm --verbose install
RUN npm run build
CMD ["npm", "start"]

