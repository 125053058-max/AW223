from flask import Flask 

app= Flask (__name__)

@app.route('/soyotraruta')
def otra():
    return "Esta es la dirección de otra ruta"

if __name__=='__main__':
    app.run(debug=True)