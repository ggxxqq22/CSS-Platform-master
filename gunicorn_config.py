import gevent.monkey

gevent.monkey.patch_all()

import multiprocessing
import os

if not os.path.exists('log'):
    os.mkdir('log')

debug = True
loglevel = 'debug'
bind = '127.0.0.1:8025'
timeout = 300
# pidfile = 'log/gunicorn.pid'
# errorlog = 'log/gunicorn_error.log'
# accesslog = 'log/gunicorn_access.log'

# 启动的进程数
# workers = 4
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = 'gunicorn.workers.ggevent.GeventWorker'

x_forwarded_for_header = 'X-FORWARDED-FOR'