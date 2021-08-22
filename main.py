# Copyright 2015 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START gae_flex_quickstart]
import logging

from flask import Flask, request
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, ForeignKey
from cockroachdb.sqlalchemy import run_transaction
app = Flask(__name__)

engine = create_engine(r'cockroachdb://matthew:X96Pq-Ke8MOuDd8q@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=/home/mattborkowski9/.postgresql/root.crt&options=--cluster%3Dalive-mantis-3045')

connection = engine.connect()

meta = MetaData()

Users = Table(
   'users', meta, 
   Column('userid', Integer, primary_key = True), 
   Column('useremail', String(254)), 
   Column('userpass', String(128)),
   Column('username', String(20)),
)

Items = Table(
   'items', meta, 
   Column('item', Integer,), 
   Column('itemname', String(100)), 
   Column('itemcost', Integer),
   Column('itemsn', String(50)),
   Column('itempurchdate', String(8)),
   Column('userid', Integer, foreign_key = True),
   Column('location', String(100))
)

@app.route('/processjson-account', methods=['POST'])
def profilejson():
    req_data = request.get_json()
    
    userid = req_data['user_id']
    useremail = req_data['user_email']
    userpass = req_data['user_password']
    username = req_data['user_name']
    ins = Users.insert().values(userid = userid, useremail = useremail, userpass = userpass, username = username)
    conn = engine.connect()
    conn.execute(ins)

@app.route('/processjson-item', methods=['POST'])
def itemjson():
    req_data = request.get_json()
    
    itemid = req_data['item_id']
    itemname = req_data['item_name']
    itemcost = req_data['item_cost']
    itemsn = req_data['item_sn']
    itempurchdate = req_data['item_purchase_date']
    userid = req_data['user_id']
    location = req_data['location']
    ins = Users.insert().values(itemid = itemid, itemname = itemname, itemcost = itemcost, itempurchdate = itempurchdate, userid = userid, location = location)
    conn = engine.connect()
    conn.execute(ins)



@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return 'DATABASE IS LIVE!!'


@app.errorhandler(500)
def server_error(e):
    logging.exception('An error occurred during a request.')
    return """
    An internal error occurred: <pre>{}</pre>
    See logs for full stacktrace.
    """.format(e), 500


if __name__ == '__main__':
    # This is used when running locally. Gunicorn is used to run the
    # application on Google App Engine. See entrypoint in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
# [END gae_flex_quickstart]
