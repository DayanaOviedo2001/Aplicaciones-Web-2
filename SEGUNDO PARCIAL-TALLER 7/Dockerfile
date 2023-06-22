FROM node
COPY . /VAR/WWW
WORKDIR /VAR/WWW
RUN npm install
EXPOSE 2500
ENTRYPOINT [ "npm", "start" ]