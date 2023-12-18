from flask import Flask, request
from flask_cors import CORS, cross_origin
import json
import sqlite3
app = Flask(__name__)
datafromjson = []
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# SEND TO FRONTEND
@app.route("/getbackenddata", methods=['GET'])
@cross_origin()
def members():
    if (datafromjson!=[]):
        return 0
        
    else:
        f = open("txtdata.txt", "r")
        tempf = f.read()
        return tempf

        
# GET FROM FRONTEND
@app.route('/backenddata', methods = ['post'])
@cross_origin()
def get_query_from_react():
    data = request.get_json()
    with open('txtdata.txt', 'w') as f:
        f.write(json.dumps(data))
    print(data)
    
    connection = sqlite3.connect('my_database.db')
    cursor = connection.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY,
    firstName TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    midname TEXT NOT NULL,
    phonenumber TEXT NOT NULL,
    textinfo TEXT NOT NULL,
    contactme TEXT NOT NULL,
    dropdown TEXT NOT NULL
    )
    ''')
    cursor.execute(f"INSERT INTO Users (firstName, lastname, email, midname, phonenumber, textinfo, contactme, dropdown) VALUES ('dbfname', 'dblname', 'dbemail', 'dbmidname', 'phonenumber', 'textinfo', 'contactme', 'dropdown')")
    
    cursor.execute('SELECT * FROM Users')
    users = cursor.fetchall()
    print(users)
    
    connection.commit()
    connection.close()
    print('done')

    return data


if __name__ == "__main__":
    app.run(debug=True)

def wrapper():
    connection = sqlite3.connect('my_database.db')
    cursor = connection.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY,
    firstName TEXT NOT NULL,
    email TEXT NOT NULL,
    midname TEXT NOT NULL,
    phonenumber TEXT NOT NULL,
    textinfo TEXT NOT NULL,
    contactme TEXT NOT NULL,
    dropdown TEXT NOT NULL,
    )
    ''')
    connection.commit()
    connection.close()
    print('done')


