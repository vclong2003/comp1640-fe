FROM node:alpine

WORKDIR /app

COPY . .

RUN yarn global add serve && yarn install && yarn build:prod

EXPOSE 4200
CMD ["serve", "-s", "-l", "4200", "./build"]