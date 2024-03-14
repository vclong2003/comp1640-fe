FROM node:alpine

WORKDIR /app

COPY . .

# RUN npm install -g serve
# RUN npm install
# RUN npm run build:prod

RUN yarn global add serve && yarn install && yarn build:prod

EXPOSE 4200
CMD ["serve", "-s", "-l", "4200", "./build"]