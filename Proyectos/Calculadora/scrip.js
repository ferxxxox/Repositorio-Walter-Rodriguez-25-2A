function suma(){

    let num1 = +document.getElementById("num1").value

    let num2 = +document.getElementById("num2").value

    mostrarResultados(num1 + num2)

}

function resta(){
    let num1 = +document.getElementById("num1").value

    let num2 = +document.getElementById("num2").value

    mostrarResultados(num1 - num2)
}

function mult(){
    let num1 = +document.getElementById("num1").value

    let num2 = +document.getElementById("num2").value

    mostrarResultados(num1 * num2)
}

function div(){
    let num1 = +document.getElementById("num1").value

    let num2 = +document.getElementById("num2").value

    mostrarResultados(num1 / num2)
}

function power(){

    let num1 = +document.getElementById("num1").value

    let num2 = +document.getElementById("num2").value

    let resultado 

    resultado = Math.pow(num1 , num2) // Math pow es para elevar el numero para hacer una potenciacion 

    mostrarResultados (resultado)
}

function raiz(){

    let num1 = +document.getElementById("num1").value

    let num2 = +document.getElementById("num2").value

    let resultado 

    resultado = Math.sqrt(num1) //Math sqrt funcion para usar la raiz cudrada de n numero 

    mostrarResultados (resultado )
}

function ce(){
    document.getElementById('display').value = ' ';
    document.getElementById('num1').value = ' ';      //Sirve para que todo los display se limpien
    document.getElementById('num2').value = ' ';
}


function mostrarResultados(resultado){

    document.getElementById("display").value = resultado ;


}