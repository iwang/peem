import pymongo
import tushare as ts
import pandas as pd
import numpy as np
from pymongo import MongoClient

def get_k_data(stocks):
    i = 0
    errors = []

    total = 0
    if isinstance(stocks, pymongo.cursor.Cursor):
        total = stocks.count()
    elif isinstance(stocks, list):
        total = len(stocks)
    for stock in stocks:
        code = stock['code']
        i += 1
       
        try:
            data = ts.get_k_data(code)
            print("geting %d/%d, %s, %d" % (i, total, code, data.index.size))
        except Exception as e:
            errors.append({'code': code})  
        else:
            if data.index.size > 0:
                collection.insert_many(data.to_dict('records'))
    print("%d is finished, %d errors" % (i, len(errors)))
    if len(errors) > 0:
        get_k_data(errors)

client = MongoClient()
db = client.stock
collection = db['day']
collection.drop()

stocks = db['stock_basics'].find({}, {'code': 1, '_id': 0})

get_k_data(stocks)
#print(help(stocks))
#new_stocks = stocks.tail(10)

