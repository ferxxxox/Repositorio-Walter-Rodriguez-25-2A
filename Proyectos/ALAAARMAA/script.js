function contador() {
    const tiempo = +document.getElementById('num').value;
    setTimeout(finalizado, 1000 * tiempo);  // para convertilo en segundos 
}

function finalizado() {
    let mostrar = document.getElementById('salida');
    let alarma = document.getElementById('alarma');
    alarma.play();
    mostrar.textContent = 'ON';
    mostrar.style = 'color: red ; font-size: 40px';
}

function reiniciar() {
    location.reload(); //Sirve para no tener que dar f5
}