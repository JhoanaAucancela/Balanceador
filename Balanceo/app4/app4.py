from flask import request, Flask,render_template
import json

app4 = Flask(__name__,template_folder='page',static_folder='./page');
@app4.route('/')
def main():
    return render_template('index.html')

if __name__ == '__main__':
    app4.run(debug=True, host='0.0.0.0')

