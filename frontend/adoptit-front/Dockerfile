FROM node:latest
WORKDIR /app/
RUN addgroup app && adduser -S -G app app && chown -R app /app
USER app
COPY package*.json ./
RUN npm i
COPY . ./
CMD [ "npm", "start" ]

