from help.test import load_csv,save_csv
from flask import Flask,request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

diamonds=load_csv()

df = pd.read_csv("diamonds.csv")

@app.route("/add", methods=['POST'])
def add_student():
    data= request.get_json()
    
    diamonds.append(data)
    save_csv(diamonds)
    return data

@app.route("/upd", methods=['POST'])
def upd_student():
    data= request.get_json()
    print(data["grades"])
    for stu in  diamonds:
        if stu["name"] == data["name"]:
            print(stu["grades"])
            stu["grades"]= data["grades"]

    # diamonds.append(data)
    save_csv(diamonds)
    return data


@app.route("/add_grade", methods=['POST'])
def add_grade():
    data= request.get_json()
    diamonds.append(data)
    save_csv(diamonds)
    return diamonds


@app.route("/clean")
def killthemall():
    save_csv([])
    return load_csv()

@app.route("/")
def start_site():
    return diamonds

if __name__ == '__main__':
    app.run(debug=True)