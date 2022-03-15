# react build
FROM node:16-alpine as FrontEnd
WORKDIR /app/temp/client

COPY . .

RUN yarn install --immutable --immutable-cache --check-cache  && yarn run build

# serve files process
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
# remove defaults
RUN rm -rf ./*

COPY --from=FrontEnd /app/temp/client .

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
