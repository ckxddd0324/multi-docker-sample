# Build Phrase
FROM node:alpine as builder
# as for like variable name
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# /app/build <-all the stuff we need
# thats the folder with the build file

# only one FROM statement in each phrase
# Second phrase
FROM nginx

# only for deploy/ elasticbeanstalk
EXPOSE 3000
# copy something from the other phrase
# this is copying from builder phrase
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

# no need run a command to start nginx