from flask import request, Flask, render_template
import json

app1 = Flask(__name__, template_folder='./');

@app1.route('/')
def  main():
    return render_template('index.html')


if __name__ == '__main__':
    app1.run(debug=True, host='0.0.0.0')

