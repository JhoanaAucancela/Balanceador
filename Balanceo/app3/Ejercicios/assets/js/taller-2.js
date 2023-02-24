//Calcular el precio con descuento
function calcular_descuento() {
    var precio = document.getElementById('inputPrice').value;
    var descuento = document.getElementById('inputDiscount').value;
    var cupon = document.getElementById('inputCoupon').value;
    var descuentoCupon = 0;
    var errorDescuento = document.getElementById('errorDiscount');
    var errorCupon = document.getElementById('errorCoupon');
    var txt = document.getElementById('aviso');
    var resul = document.getElementById('Calculo');
    //validar
    if(parseInt(descuento)>70)
    {
        errorDescuento.textContent = "El descuento maximo es de 70%";
        descuento = 0;
    } else if(parseInt(descuento)<0) {
        errorDescuento.textContent = "El descuento minimo es de 0%";
        descuento = 0;
    } 
    //Promo
    if(cupon == "Promo10")
    {
        descuentoCupon = 0.10;
        errorCupon.textContent = ""
    } else if(cupon == "Promo20"){
        descuentoCupon = 0.20;
        errorCupon.textContent = ""
    } else if(cupon == "Promo30"){
        descuentoCupon = 0.30;
        errorCupon.textContent = ""
    } else {
        errorCupon.textContent = "Cupon no detectado";
    }

    var descuentoValor = parseFloat(precio) * ((parseInt(descuento)/100) + parseFloat(descuentoCupon));
    var calculo = parseFloat(precio) - parseFloat(descuentoValor);
    resul.textContent = "El precio final es: "+calculo.toFixed(2);
} 