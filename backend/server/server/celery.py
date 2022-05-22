# coding: utf-8

from __future__ import absolute_import

from django.apps import apps

from celery import Celery

from .celerybeat_schedule import CELERYBEAT_SCHEDULE


app = Celery("server_tasks")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks(lambda: [n.name for n in apps.get_app_configs()])
app.conf.update(CELERYBEAT_SCHEDULE=CELERYBEAT_SCHEDULE)
app.conf.task_default_priority = 5
