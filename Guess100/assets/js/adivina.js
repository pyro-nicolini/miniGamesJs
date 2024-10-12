const genNumber = Math.ceil(Math.random() * 100);
const num = document.getElementById('entrada');

let games = 1;
const maxGames = 10;

document.getElementById('boton').addEventListener('click', (event) => {
    if (games > maxGames) {
        alert("GAME OVER");
        num.value = "";
        return;
    }
    
    const sinEspacios = num.value.trim();
    const redondeado = Math.floor(Number(sinEspacios));

  
    if (sinEspacios !== "" && !isNaN(redondeado) && redondeado >= 1 && redondeado <= 100) {
        mostrarNumeros(redondeado);
        games++;
    } else {
        num.value = "";
        alert("Ingrese un número válido entre 1 y 100");
    }
});

function mostrarNumeros(userGuess) {
    const stat = document.getElementById('stats'); 
    let elecciones = document.createElement(`li`); 
    stat.appendChild(elecciones); 
    elecciones.textContent = compararNumeros(userGuess); 
    num.value = ""; 
}

function compararNumeros(userGuess) {
    if (userGuess === genNumber) {
        alert("¡GANASTE!"); 
        games = maxGames + 1; 
        return `Ganaste con ${userGuess}`;
    } else if (userGuess > genNumber) {
        return `Te pasaste, no es el ${userGuess}`;
    } else {
        return `Te faltó, no es el ${userGuess}`;
    }
}
