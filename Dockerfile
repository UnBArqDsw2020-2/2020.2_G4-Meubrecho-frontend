FROM node:14.15.5-alpine3.13
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]

