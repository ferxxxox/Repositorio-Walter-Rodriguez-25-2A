function nota(){

    const nota1 = +document.querySelector("#num1").value
    const nota2 = +document.querySelector("#num2").value //declaracion de cada variable para los promedios 
    const nota3 = +document.querySelector("#num3").value

    const salida = document.querySelector("#salida")  //Para que el mensaje se pueda ver se declara la salida

    const texto = document.querySelector("#texto")

    let promedio;

    promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.3)

    if(promedio >= 6 && promedio <= 10){

        salida.textContent = promedio.toFixed(2) + " Está aprobado"
    } else{

        salida.textContent = promedio.toFixed(2) + " Está reprobado"
    }


    if (promedio > 9 && promedio <= 10) {                   //Parte del codigo usando if y else que nos sirve para establecer condicionales
        texto.textContent = "Excelente desempeño";          //con motivo de escribir mensajes dependiendo del promedio
    } 
    if (promedio >= 7 && promedio <= 9) {
        texto.textContent = "Muy buen desempeño";
    } 
    if (promedio >= 6 && promedio < 7) {
        texto.textContent = "Aprobado pero necesitas mejorar";
    } 
    if (promedio >= 4 && promedio < 6) {
        texto.textContent = "Necesitas mejorar";
    } 
    if (promedio < 4) {
        texto.textContent = "...";
    }
    



}
