from flask import request, Flask, render_template
import json

app3 = Flask(__name__, template_folder='./Ejercicios', static_folder='./Ejercicios');

@app3.route('/')
def main():
    return render_template('index.html')

if __name__ == '__main__':
    app3.run(debug=True, host='0.0.0.0')

