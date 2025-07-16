#!/bin/sh

set -e

echo "📦 Generando archivo de configuración NGINX..."

envsubst '$CREATE_USER_HOST $CREATE_USER_PORT $DELETE_USER_HOST $DELETE_USER_PORT $UPDATE_USER_HOST $UPDATE_USER_PORT $REGISTER_GAME_HOST $REGISTER_GAME_PORT $GRAPHQL_USER_HOST $GRAPHQL_USER_PORT $SOAP_CREATE_ROLE_HOST $SOAP_CREATE_ROLE_PORT $SOAP_DELETE_ROLE_HOST $SOAP_DELETE_ROLE_PORT $SOAP_UPDATE_ROLE_HOST $SOAP_UPDATE_ROLE_PORT $SOAP_GETBYID_ROLE_HOST $SOAP_GETBYID_ROLE_PORT $SOAP_GETALL_ROLE_HOST $SOAP_GETALL_ROLE_PORT' \
< /etc/nginx/default.template.conf > /etc/nginx/conf.d/default.conf

echo "✅ Configuración generada correctamente en /etc/nginx/conf.d/default.conf"

echo "🚀 Iniciando NGINX..."

exec nginx -g 'daemon off;'
