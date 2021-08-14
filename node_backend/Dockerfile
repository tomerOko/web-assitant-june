FROM node:16
RUN apt-get update
RUN apt-get -y install vim

RUN npm i -g nodemon@2.0.12 ts-node@10.2.0 typescript@4.3.5 pm2@5.1.0 @types/express@4.17.13 @types/node@16.6.1

ENV PATH=/app/node_modules/.bin:$PATH
ENV NODE_ENV=development

# the 'EXPOSE' is for internal network communication (docker-compose network). but i am not sure it is working
EXPOSE 3000
WORKDIR /app

#shuld be overide by the docker-compose ENTRYPOINT property
ENTRYPOINT [ "bash" ]


#sudo docker-compose up -d 
#sudo docker-compose up -d --build  
#sudo docker-compose up -d --build --force-recreate

