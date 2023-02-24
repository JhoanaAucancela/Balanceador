function abrirCafe(){
    document.getElementById("formularioCafe").style.display="block";
}
function cerrarCafe(){
    document.getElementById("formularioCafe").style.display="none";
}

function abrirHelado(){
    document.getElementById("formularioHelado").style.display="block";
}
function cerrarHelado(){
    document.getElementById("formularioHelado").style.display="none";
}

function recogerDatosHeladeria(){
    document.getElementById("cont-datos").style.display="block";
    document.getElementById("datosHelado").style.display="block";
    let nombreCliente = document.getElementById ("nombre_cliente").value;
    let telefonoCliente = document.getElementById ("telefono_cliente").value;
    let emailCliente = document.getElementById ("email_cliente").value;

    let sabor='';
    let saborVainilla = document.getElementById("vainilla");
    let saborChocolate = document.getElementById("chocolate");
    let saborMixto = document.getElementById("mixto");

    if(saborVainilla.checked){
        sabor=saborVainilla.value;
    }else if(saborChocolate){
        sabor= saborChocolate.value;
    }else{
        sabor=saborMixto.value;
    }

    let recipiente='';
    let recipienteCopa = document.getElementById("copa");
    let recipienteTarrina = document.getElementById("tarrina");

    if(recipienteCopa.checked){
        recipiente=recipienteCopa.value;
    }else{
        recipiente=recipienteTarrina.value;
    }

    let extras =[];
    let extraCaramelo = document.getElementById("caramelo");
    let extraKitkat = document.getElementById("kitkat");
    let extraChocolate = document.getElementById("chocolate");


    if(extraCaramelo.checked){
        extras.push(extraCaramelo.value);
    }
    if(extraKitkat.checked){
        extras.push(extraKitkat.value);
    }
    if(extraChocolate.checked){
        extras.push(extraChocolate.value);
    }

    let mensajeFinal = "El cliente: " +nombreCliente+ ", con telefono: "+telefonoCliente+", email: "+emailCliente+"... ha elegido un helado con sabor: "+sabor+" en un recipiente de: "+recipiente+ " con los siguientes extras: ";
    for(let i=0; i<extras.length;i++){
        const elemento = extras[i];
        mensajeFinal+=elemento+" ";
    }
    
    document.getElementById('datosHelado').innerHTML=mensajeFinal;
}

function cerrarDatosHelados(){
    document.getElementById("cont-datos").style.display="none";
    document.getElementById("datosHelado").style.display="none";
}

//CAFETERIA

function recogerDatosCafeteria(){
    document.getElementById("cont-datos-cafe").style.display="block";
    document.getElementById("datosCafe").style.display="block";
    let nombreCliente = document.getElementById ("nombre_cliente").value;
    let telefonoCliente = document.getElementById ("telefono_cliente").value;
    let emailCliente = document.getElementById ("email_cliente").value;

    let tipo='';
    let tipoCapuchino = document.getElementById("capuchino");
    let tipoChocolate = document.getElementById("chocolate");
    let tipoExpreso = document.getElementById("expreso");

    if(tipoCapuchino.checked){
        tipo=tipoCapuchino.value;
    }else if(tipoChocolate){
        tipo= tipoChocolate.value;
    }else{
        tipo=tipoExpreso.value;
    }


    let extras =[];
    let extraCaramelo = document.getElementById("caramelo");
    let extraLeche = document.getElementById("leche");
    let extraCrema = document.getElementById("crema");


    if(extraCaramelo.checked){
        extras.push(extraCaramelo.value);
    }
    if(extraLeche.checked){
        extras.push(extraLeche.value);
    }
    if(extraCrema.checked){
        extras.push(extraCrema.value);
    }

    let mensajeFinal = "El cliente: " +nombreCliente+ ", con telefono: "+telefonoCliente+", email: "+emailCliente+"... ha elegido un: "+tipo+ " con los siguientes extras: ";
    for(let i=0; i<extras.length;i++){
        const elemento = extras[i];
        mensajeFinal+=elemento+" ";
    }
    
    document.getElementById('datosCafe').innerHTML=mensajeFinal;
}

function cerrarDatosCafe(){
    document.getElementById("cont-datos-cafe").style.display="none";
    document.getElementById("datosCafe").style.display="none";
}