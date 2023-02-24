from flask import request, Flask, render_template
import json
                                    
app5 = Flask(__name__,template_folder='page',static_folder='./page');
@app5.route('/')
def main():
    return render_template('index.html')

if __name__ == '__main__':
    app5.run(debug=True, host='0.0.0.0')

