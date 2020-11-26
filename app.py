from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/api/test')
def test():
    return '我来自python'