import os
from dotenv import load_dotenv
import pymongo
import json

DATABASE_NAME='STOCKINSIGHTS'
COLLECTION_NAME='announcements'

load_dotenv()
url = os.getenv("MONGODB_URL")

myclient = pymongo.MongoClient(url)
print(myclient)

db = myclient[DATABASE_NAME]
col = db[COLLECTION_NAME]


def dump_data_in_mongodb():
    # read json file

    with open('./bse_announcements_data.json', 'r', encoding='utf-8') as file:
        json_file  = json.loads(file.read())
    col.insert_many(list(json_file))
        
dump_data_in_mongodb()