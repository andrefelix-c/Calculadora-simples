function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = null;
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        let value = eval(resultado);
        if(value%1===0){
            document.getElementById('resultado').innerHTML = eval(resultado);
        }

        else{
            document.getElementById('resultado').innerHTML = eval(resultado).toFixed(4);
        }

        if(value>1000000){
            document.getElementById('resultado').style.fontSize = '50px';
        }
    }
    else {
        document.getElementById('resultado').innerHTML = 'ERROR!';
    }
}