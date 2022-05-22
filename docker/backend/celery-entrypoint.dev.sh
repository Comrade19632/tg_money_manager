#!/bin/sh

until cd /app/backend/server
do
    echo "Waiting for server volume..."
done

watchmedo auto-restart --recursive -d . -p '*.py' -- celery -A server.celery worker --beat --loglevel=info