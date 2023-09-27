
function reportarClima() {
    alert("Loading weather report...");
}

function aceptarCookie() {
    let botonCookie = document.querySelector(".cuadroCookie");
    botonCookie.remove();
}

function medirTemperatura(elemento) {
    let opcion = elemento.options[elemento.selectedIndex].text;

    cambiarMedicion(opcion);
}

function cambiarMedicion(simbolo) {
    let temperatura = "", formulaCelcius = "", formulaFahrenheit = "";

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 2; j++) {
            temperatura = document.querySelector(`#dia${i} .temperatura${j}`).innerHTML;

            if (temperatura.length === 3) {
                temperatura = temperatura.substring(0, 2);
            }
            else if (temperatura.length === 4) {
                temperatura = temperatura.substring(0, 3);
            }

            formulaCelcius = Math.round((temperatura * 32) * (5 / 9));
            formulaFahrenheit = Math.round((temperatura * (9 / 5)) + 32);
        
            if (simbolo === "°F") {
                document.querySelector(`#dia${i} .temperatura${j}`).innerHTML = `${formulaCelcius}°`;
            }
            else {
                document.querySelector(`#dia${i} .temperatura${j}`).innerHTML = `${formulaFahrenheit}°`;
            }
        }
    }

}