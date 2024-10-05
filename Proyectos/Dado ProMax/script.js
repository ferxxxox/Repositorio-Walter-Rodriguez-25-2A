
function dado(){
    const min = +document.querySelector('#numMin').value;
    const max = +document.querySelector('#numMax').value;
    let random = Math.round(Math.random()*(max-min+1)+min)// Multiplicamos por (max - min + 1) para ajustar el rango, luego sumamos "min" para desplazarlo al rango deseado.
    const salida = document.querySelector('#salida');
    salida.textContent = random;
}