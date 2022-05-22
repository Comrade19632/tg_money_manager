#!/bin/sh

until cd /app/backend/server
do
    echo "Waiting for server volume..."
done

celery -A server.celery worker --beat --loglevel=info