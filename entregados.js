// NOta para el profesor
//No pude lograr que los cambios en los puntos de vida/fuerza se vieran reflejados en el HTML, me podria ayudar con eso por favor!!


// Obtenemos el botón por su ID
let boton = document.getElementById("boton");

boton.addEventListener("click", mostrarAlerta);

// Obtenemos los elementos del HTML para los puntos de vida y ataque
let puntosVidaElement = document.getElementById("puntos-vida");
let puntosAtaqueElement = document.getElementById("puntos-ataque");

// Inicializamos los puntos de vida y ataque del jugador
let puntosVida = 100;
let puntosAtaque = 25;

// Actualizamos el contenido de los elementos del HTML con los puntos de vida y ataque iniciales
puntosVidaElement.textContent = "Puntos de vida: " + puntosVida;
puntosAtaqueElement.textContent = "Puntos de ataque: " + puntosAtaque;

function mostrarAlerta() {
    // Solicitamos al usuario el nombre del jugador y lo almacenamos en una variable
    let nombreJugador = prompt("Tu aventura comienza, joven guerrero, dinos tu nombre");

    // Mostramos un alert con un saludo personalizado para el jugador
    alert("¡Bienvenido a la aventura, " + nombreJugador + "!");

    alert("Recorres las tierras de Minland en busca de provisiones. Viene un mercader herrante y ve tu desdicha. Te ofrece solo dos objetos");

    // Creamos un array con los objetos que ofrece el mercader
    let objetos = ["Pera", "Manzana", "Espada corta", "Escudo"];

    // Creamos un array vacío para almacenar los objetos seleccionados
    let seleccionados = [];

    // Agregamos un ciclo para permitir que el jugador seleccione hasta dos objetos del mercader
    while (seleccionados.length < 2) {
        let seleccion = prompt("Seleccione un objeto para llevarse:\n1. Pera\n2. Manzana\n3. Espada corta\n4. Escudo");

        // Si el usuario selecciona un objeto válido y que no ha sido seleccionado anteriormente, lo agregamos al array de objetos seleccionados
        if (seleccion >= 1 && seleccion <= 4 && !seleccionados.includes(objetos[seleccion - 1])) {
            seleccionados.push(objetos[seleccion - 1]);
            alert("Ha escogido " + objetos[seleccion - 1] + ".");
            // Si el objeto seleccionado es una pera o una manzana, preguntamos al jugador si quiere comerla
            if (objetos[seleccion - 1] === "Pera" || objetos[seleccion - 1] === "Manzana") {
                let respuesta = prompt("¿Quieres comer " + objetos[seleccion - 1] + "? (s/n)");
                if (respuesta === "s") {
                    if (objetos[seleccion - 1] === "Pera") {
                        puntosVida += 10;
                        alert("Has ganado 10 puntos de vida. Ahora tienes " + puntosVida + " puntos de vida.");
                    } else if (objetos[seleccion - 1] === "Manzana") {
                        puntosVida += 15;
                        alert("Has ganado 15 puntos de vida. Ahora tienes " + puntosVida + " puntos de vida.");
                    }
                }
            } else if (objetos[seleccion - 1] === "Espada corta") {
                let respuesta = prompt("¿Quieres equipar la espada corta? (s/n)");
                if (respuesta === "s") {
                    puntosAtaque += 25;
                    alert("Has equipado la espada corta. Tu ataque ha aumentado en 25 puntos. Ahora tienes " + puntosAtaque + " puntos de ataque.");
                }
            }
            // Si el jugador ha seleccionado dos objetos, mostramos un mensaje y salimos del ciclo
            if (seleccionados.length === 2) {
                alert("La avaricia conduce a perdición guerrero, no abuses de la bondad del que te rodea");
                break;
            }
        }
    }
}





