FROM node:alpine
WORKDIR /D/techtext-tcs-senac
COPY package.json ./
RUN npm install
COPY . . 
EXPOSE 3333
CMD ['npm', 'run', 'dev']