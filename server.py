import socket
import logging
import sys
from colorama import *
from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from flask import Flask, send_from_directory
from flask_cors import *

init(autoreset=True)

app = Flask(__name__, static_folder='resource', template_folder='')

CORS(app)

@app.route('/')
def index():
    with open('index.htm', 'r', encoding='utf-8') as file:
        content = file.read()
    return content, {'Content-Type': 'text/html'}

@app.route('/resource/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

hostname = socket.gethostname()
local_ip = socket.gethostbyname(hostname)

http_server = HTTPServer(WSGIContainer(app))
http_server.listen(9000, address=local_ip)

print(Style.BRIGHT + 'MAS COREISO 2024. All rights reserved')
print(Style.BRIGHT + 'Python: ' + sys.version + ' Platform: ' + sys.platform)
STR = 'Tornado 6.4.1 Visit ' + local_ip + ':9000\n'
print(Fore.GREEN + Style.BRIGHT + STR)

logging.basicConfig(level=logging.INFO)
app_log = logging.getLogger("tornado.application")

IOLoop.current().start()