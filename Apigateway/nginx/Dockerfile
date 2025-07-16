FROM nginx:latest

RUN apt-get update && apt-get install -y gettext-base

COPY default.template.conf /etc/nginx/default.template.conf
COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
