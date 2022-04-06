FROM node:latest
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .
CMD [ "npm", "start" ]

