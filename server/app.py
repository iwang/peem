# -*- coding: utf-8 -*-
from flask import Flask
from flask import request
from flask import jsonify
from flask import make_response
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'stock'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/stock'
mongo = PyMongo(app)

@app.route('/')
def hello_world():
  return 'Hello, Worldddsd!'

@app.route('/stocks')
def get_stocks():
  key = request.args.get('key', '')
  stocks = mongo.db.stock_basics.find({"code": {"$regex": key+".*"}}, {'_id': False})
  r = app.make_response(jsonify(list(stocks.limit(10))))
  r.headers["Content-Type"] = "application/json; charset=utf-8"
  r.headers["Access-Control-Allow-Origin"] = "*"
  return r
