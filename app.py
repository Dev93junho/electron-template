import sys
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World from Flask"

@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        description = request.args('desc')
        # run onnx model
    return # need to model outputs data type

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000)

    