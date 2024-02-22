FROM nginx:mainline-alpine-slim
LABEL authors="zeckson"

COPY . /usr/share/nginx/html
