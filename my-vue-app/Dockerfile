FROM node:6.9.4
LABEL maintainer Lucas Souza Fernandes <lucascoala@gmail.com>
# Set the work directory
WORKDIR /www/leads2b-login
# Good to have stuff
RUN npm install pm2 -g
RUN npm install babel-cli -g
RUN apt-get update && apt-get install -y \
  vim
# Use Cache please
ADD package.json /www/leads2b-login
RUN npm install
# Add application files
ADD . /www/leads2b-login
# Entrypoint script
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh
# Expose the port
EXPOSE 8080
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]