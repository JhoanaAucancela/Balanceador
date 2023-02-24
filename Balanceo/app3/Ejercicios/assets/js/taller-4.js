var arr=[];
var arr1=[545,1245.32,300.50,445.76,800,1000.10,935.65];

//CheckBox
var checkbox = document.getElementById('checkInput'); 
checkbox.addEventListener('click',micheck());

function micheck(){
    var listadeful = document.getElementById("list-values-default");
    listadeful.innerHTML = '';
    if (checkbox.checked){
        for(var i = 0; i <arr1.length; i++){
            var li = document.createElement('li');
            li.textContent =  arr1[i];
            listadeful.appendChild(li);
        }
    }
    else {  
        listadeful.innerHTML = '';
    }
}

function switchFormula(){
    const selectElement = document.querySelector('select');
}

//Agregar valores a la lista
function addListNumber(){
    var lista = document.getElementById("list-values");
    var n = document.getElementById("addValue").value; 
    var listadeful = document.getElementById("list-values-default");
    lista.innerHTML = '';
    if (checkbox.checked){
        if(n !== ''){
            arr1.push(n);
            listadeful.innerHTML = '';
            if(arr1.length > 10) {
                arr1.pop();
                var error = document.getElementById("errorAddValue");
                error.textContent = "Solo se permite hasta 10 valores"
            }
            for(var i = 0; i <arr1.length; i++){
                var itemText = arr1[i];
                var li = document.createElement('li');
                li.textContent = itemText;
                listadeful.appendChild(li);
            }
            n = ''; 
        }
    }else {
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



}

function removeListNumber(){
    var lista = document.getElementById("list-values");
    var numero = document.getElementById("removeValue").value;
    var listadeful = document.getElementById("list-values-default");
    console.log(arr);
    if (checkbox.checked){
        arr1.splice(numero, 1);
        listadeful.innerHTML = '';
        for(var i = 0; i <arr1.length; i++){
            var li = document.createElement('li');
            li.textContent = arr1[i];
            listadeful.appendChild(li);
        }
    }else{
        arr.splice(numero, 1);
        lista.innerHTML = '';
        for(var i = 0; i <arr.length; i++){
            var li = document.createElement('li');
            li.textContent = arr[i];
            lista.appendChild(li);
        }
    }  
}

//Calcular las Salarios
function renderMedianaSalarial(){
    var opcion = document.getElementById("formulaSelect").value;
    var txt = document.getElementById("calcular");

    //Mediana salarial
    if(opcion ==1){
        if (checkbox.checked){
            function median(numbers) {
                const l=arr1.length;
                const sorted = numbers.slice().sort((a, b) => a - b);
                const middle = Math.floor(sorted.length / 2);
                if (sorted.length % 2 === 0) {
                    arr1.slice((l/2), l/2+1)[0]
                } else{
                    arr1.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
                }
                return sorted[middle];
            }
            txt.textContent= "La mediana salarial: "+ median(arr1);
        }else {
            function median(numbers) {
                const l=arr.length;
                const sorted = numbers.slice().sort((a, b) => a - b);
                const middle = Math.floor(sorted.length / 2);
                if (sorted.length % 2 === 0) {
                    arr.slice((l/2), l/2+1)[0]
                } else{
                    arr.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
                }
                return sorted[middle];
            }
            txt.textContent= "La mediana salarial: "+ median(arr);    
        }  
    }
    //Mediana salarial TOP 10%
    if(opcion == 2){
        if (checkbox.checked){
            function median(numbers) {
                const l=arr1.length;
                const sorted = numbers.slice().sort((a, b) => a - b);
                const middle = Math.floor(sorted.length / 2);
                if (sorted.length % 2 === 0) {
                    arr1.slice((l/2), l/2+1)[0]
                } else{
                    arr1.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
                }
                return sorted[middle];
            }
            var top = median(arr1);
            var topresultado = (parseFloat(top) * 0.10);
            txt.textContent= "La mediana salarial TOP 10%: "+topresultado.toFixed(2);
        }else {  
            function median(numbers) {
                const l=arr.length;
                const sorted = numbers.slice().sort((a, b) => a - b);
                const middle = Math.floor(sorted.length / 2);
                if (sorted.length % 2 === 0) {
                    arr.slice((l/2), l/2+1)[0]
                } else{
                    arr.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
                }
                return sorted[middle];
            }
            var top = median(arr);
            var topresultado = (parseFloat(top) * 0.10);
            txt.textContent= "La mediana salarial TOP 10%: "+topresultado.toFixed(2);
        }
    }   
}