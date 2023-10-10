# build environment
FROM node:18.12.1-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./

RUN npm set-script prepare ""
RUN yarn install

COPY . .

RUN yarn build

# production environment
FROM nginxinc/nginx-unprivileged:1.20.1-alpine
WORKDIR /app

ARG SERVICE_VERSION
ENV SERVICE_VERSION=$SERVICE_VERSION

COPY nginx.conf /etc/nginx/nginx.conf

USER root
RUN apk add --no-cache bash tini

COPY --from=build /app/dist /usr/share/nginx/html

COPY entrypoint.sh ./
COPY build-config.sh ./

RUN chmod +x /app/build-config.sh /app/entrypoint.sh
RUN chown -R nginx:nginx /usr/share/nginx/html

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["./entrypoint.sh"]

USER nginx
