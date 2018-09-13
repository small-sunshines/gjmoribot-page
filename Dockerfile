FROM node:latest
LABEL MAINTAINER="small_sunshine <jioo0224@naver.com>"

EXPOSE 80

WORKDIR /src
COPY . /src
RUN npm install && npm run build

CMD ["node", "main.js"]