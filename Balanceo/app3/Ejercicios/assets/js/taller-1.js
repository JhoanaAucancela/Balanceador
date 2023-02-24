//perimetro de el triangulo
function Perimetro_triangulo() {
    var n1 = document.getElementById('inputTriangulo1').value;
    var n2 = document.getElementById('inputTriangulo2').value;
    var n3 = document.getElementById('inputBase').value;
    var perimetro = parseFloat(n1) + parseFloat(n2) +  parseFloat(n3);
    var resul = document.getElementById('P_triangulo');
    resul.textContent = "El perimetro es: "+perimetro.toFixed(2);
}
//Area del triangulo
function Area_triangulo() {
    var n1 = document.getElementById('inputBase').value;
    var n2 = document.getElementById('inputAltura').value;
    var area = (parseFloat(n1) * parseFloat(n2)) / 2;
    var resul = document.getElementById('A_triangulo');
    resul.textContent = "El area es: "+area.toFixed(2);
}

//Perimetro cuadarado
function Perimetro_cuadrado() {
    var n1 = document.getElementById('inputCuadrado').value;
    var perimetro = parseFloat(n1) * 4;
    var resul = document.getElementById('P_cuadrado');
    resul.textContent = "El perimetro es: "+perimetro.toFixed(2);
}

//Area cuadrado
function Area_cuadrado() {
    var n1 = document.getElementById('inputCuadrado').value;
    var area = Math.pow(parseFloat(n1), 2);
    var resul = document.getElementById('A_cuadrado');
    resul.textContent = "El area es: "+area.toFixed(2);
}

//Perimetro rectangulo
function Perimetro_rectangulo() {
    var n1 = document.getElementById('inputRectangulo1').value;
    var n2 = document.getElementById('inputRectangulo2').value;
    var perimetro = (parseFloat(n1)* 2) + (parseFloat(n2)* 2);
    var resul = document.getElementById('P_rectangulo');
    resul.textContent = "El perimetro es: "+perimetro.toFixed(2);
}

//Area rectangulo
function Area_rectangulo() {
    var n1 = document.getElementById('inputRectangulo1').value;
    var n2 = document.getElementById('inputRectangulo2').value;
    var area = parseFloat(n1) * parseFloat(n2);
    var resul = document.getElementById('A_rectangulo');
    resul.textContent = "El area es: "+area.toFixed(2);
}

//Perimetro circulo
function Perimetro_circulo() {
    var n1 = document.getElementById('inputCirculo').value;
    var perimetro = Math.PI * parseFloat(n1) * 2;
    var resul = document.getElementById('P_circulo');
    resul.textContent = "El perimetro es: "+perimetro.toFixed(2);
}

//Area circulo
function Area_circulo() {
    var n1 = document.getElementById('inputCirculo').value;
    var area = Math.PI *Math.pow(parseFloat(n1), 2) ;
    var resul = document.getElementById('A_circulo');
    resul.textContent = "El area es: "+area.toFixed(2);
}

//Diametro circulo
function Diametro_circulo() {
    var n1 = document.getElementById('inputCirculo').value;
    var diametro = parseFloat(n1) * 2 ;
    var resul = document.getElementById('D_circulo');
    resul.textContent = "El diametro es: "+diametro.toFixed(2);
}