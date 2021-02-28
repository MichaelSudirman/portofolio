# FROM node:alpine as builder

# WORKDIR /app

# COPY package.json .
# RUN npm install
# COPY . .
# RUN ["npm", "run", "build"]

# FROM nginx
# EXPOSE 80
# COPY --from=builder /app/public /usr/share/nginx/html


FROM node:15.7-alpine3.10 as builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN ["npm", "ci"]
COPY . .
RUN ["npm", "run", "build"]

FROM nginx:1.19-alpine

RUN ["rm", "-rf", "/usr/share/nginx/html"]
COPY --from=builder /app/public /usr/share/nginx/html
COPY --from=builder /app/nginx-conf/default.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]