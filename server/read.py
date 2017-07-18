import pymongo
from pymongo import MongoClient


client = MongoClient()
db = client.stock

def getCodes():
  stocks = db['stock_basics'].find({}, {'code': 1, '_id': 0})
  codes = []
  for stock in stocks:
    codes.append(stock['code'])
  return codes


def neverTao():
  codes = getCodes()
  for code in codes:
    c = db['day'].find({'code': code})
    print(code)
    print(c.count())
    
def anaOne(code):
  c = db['day'].find({'code': code}).sort([('date', -1)])
  for d in c:
    print(d['date'])


anaOne('002350')

#neverTao()
