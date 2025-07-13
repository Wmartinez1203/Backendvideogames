#!/bin/sh

set -e

echo "📦 Generando archivo de configuración NGINX..."

envsubst < /etc/nginx/default.template.conf > /etc/nginx/conf.d/default.conf

echo "🚀 Iniciando NGINX..."

nginx -g 'daemon off;'