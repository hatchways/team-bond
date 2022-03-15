# node build
FROM node:16-alpine
WORKDIR /app/server
ENV NODE_ENV=PRODUCTION

COPY . .

RUN npm install -g npm@8
RUN npm ci

EXPOSE 3001
CMD [ "node", "./bin/www" ]
