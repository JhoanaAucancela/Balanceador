//Para cambiar la operacion
let arr = [];

function switchFormula(){
    const selectElement = document.querySelector('select');
}

//Agregar valores a la lista
function addListNumber(){
    var lista = document.getElementById("list-values");
    var n = document.getElementById("addValue").value; 
    lista.innerHTML = '';
    if(n !== ''){
        arr.push(n);
        lista.innerHTML = '';
        if(arr.length > 10) {
            arr.pop();
            var error = document.getElementById("errorAddValue");
            error.textContent = "Solo se permite hasta 10 valores"
        }
        for(var i = 0; i <arr.length; i++){
            var itemText = arr[i];
            var li = document.createElement('li');
            li.textContent = itemText;
            lista.appendChild(li);
        }
        n = ''; 
    }
}

//Eliminar valores de la lista 
function removeListNumber(){
    var lista = document.getElementById("list-values");
    var numero = document.getElementById("removeValue").value;
    arr.splice(numero, 1);
    lista.innerHTML = '';
    for(var i = 0; i <arr.length; i++){
        var itemText = arr[i];
        var li = document.createElement('li');
        li.textContent = itemText;
        lista.appendChild(li);
    }
}

//Calcular las operaciones
function Calcular(){
    var opcion = document.getElementById("formulaSelect").value;
    var lista = document.getElementById("list-values");
    var txt= document.getElementById("media1");
    const l=arr.length;
    //MEDIA ARITMETICA
    if(opcion ==1){
        let  res, numDatos, item;
        let total =0;
        numDatos = arr.length;
        lista.innerHTML = '';
        for(var i = 0; i <arr.length; i++){
            var itemText = arr[i];
            var li = document.createElement('li');
            li.textContent = itemText;
            lista.appendChild(li);    
        }
        for (item = 0; item < numDatos; item++)
        {
            total += parseInt(arr[item]) ;
        }
        res = total/numDatos;
        txt.textContent= "La media aritmetica es: "+ res.toFixed(2);
    }
    //MEDIA ARMONICA
    if(opcion ==2){
    let txt1;
    txt1 = arr.length;
    var suma=0;
    lista.innerHTML = '';
    for(var i = 0; i <arr.length; i++){
        var itemText = arr[i];
        var li = document.createElement('li');
        li.textContent = itemText;
        lista.appendChild(li); 
    }
    for(var i=0; i<txt1; i++){
        suma=suma+(1/arr[i]);
    }
    console.log(txt1/suma);
    res1 = txt1/suma;
    txt.textContent= "La media armonica es: "+ res1.toFixed(2);
    }
    //MEDIA GEOMETRICA
    if(opcion==3){
        let  total=1, total1,numDatos, item;
        numDatos = arr.length;
        lista.innerHTML = '';
        for(var i = 0; i <arr.length; i++){
            var itemText = arr[i];
            var li = document.createElement('li');
            li.textContent = itemText;
            lista.appendChild(li);  
        }
        for (item = 0; item < numDatos; item++)
        {
            total *= parseInt(arr[item]);
        }
        total1= Math.pow(total,(1/numDatos));
        console.log(total1)
        txt.textContent= "La media geometrica es: "+ total1.toFixed(2);
    }
    //MODA
    if(opcion==4){
        const lista1Count = {};
        arr.map(
        function (elemento) {
            if (lista1Count[elemento]) {
            lista1Count[elemento] += 1 ;
            } else {
            lista1Count[elemento] = 1 ;
            }
        }
        );
        const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
        );
        const moda = lista1Array [lista1Array.length - 1];
        console.log(moda)
        txt.textContent= "La moda es: "+ moda.toFixed(2);
    }
    //MEDIANA
    if(opcion==5){ 
        lista.innerHTML = '';
        for(var i = 0; i <arr.length; i++){
            var itemText = arr[i];
            var li = document.createElement('li');
            li.textContent = itemText;
            lista.appendChild(li); 
        }
        function median(numbers) {
            const sorted = numbers.slice().sort((a, b) => a - b);
            const middle = Math.floor(sorted.length / 2);
        
            if (sorted.length % 2 === 0) {
                arr.slice((l/2), l/2+1)[0]
            } else{
                arr.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
            }
            return sorted[middle];
        }
        console.log(median(arr)); 
        txt.textContent= "La mediana es: "+ median(arr);
    }
}


