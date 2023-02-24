from flask import request, Flask, render_template
import json

app2 = Flask(__name__, template_folder='./POKEMONAPI', static_folder='./POKEMONAPI');

@app2.route('/')
def main():
    return render_template('index.html')

if __name__ == '__main__':
    app2.run(debug=True, host='0.0.0.0')

