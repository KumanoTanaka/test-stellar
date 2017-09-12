FROM debian:jessie
MAINTAINER kumanote,LLC.

RUN apt-get update && apt-get install -y apt-transport-https nginx

RUN mkdir -p /var/www/stellar-kumano-te.com

EXPOSE 80 443

CMD nginx -g 'daemon off;'
