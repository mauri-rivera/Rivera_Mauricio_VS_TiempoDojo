
function reportarClima() {
    alert("Loading weather report...");
}

function aceptarCookie() {
    let botonCookie = document.querySelector(".cuadroCookie");
    botonCookie.remove();
}

function cambiarMedicion(elemento) {
    let temperatura = "", formulaCelcius = "", formulaFahrenheit = "";
    let opcion = elemento.options[elemento.selectedIndex].text;

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 2; j++) {
            temperatura = document.querySelector(`#dia${i} .temperatura${j}`).innerHTML;

            if (temperatura.length === 3) {
                temperatura = temperatura.substring(0, 2);
            }
            else if (temperatura.length === 4) {
                temperatura = temperatura.substring(0, 3);
            }
        
            if (opcion === "°F") {
                formulaFahrenheit = Math.round((temperatura * 1.8) + 32);
                document.querySelector(`#dia${i} .temperatura${j}`).innerHTML = `${formulaFahrenheit}°`;
            }
            else {
                formulaCelcius = Math.round((temperatura - 32) / 1.8);
                document.querySelector(`#dia${i} .temperatura${j}`).innerHTML = `${formulaCelcius}°`;
            }
        }
    }
}