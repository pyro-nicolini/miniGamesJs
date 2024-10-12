let eleccionUser = "";

const elementos = {
    trueno: {
        color: "#FFD700",
        imagen: "/Rock/assets/img/1.jpeg"
    },
    agua: {
        color: "#1E90FF",
        imagen: "/Rock/assets/img/2.jpeg"
    },
    roca: {
        color: "#8B4513",
        imagen: "/Rock/assets/img/3.jpeg"
    },
    planta: {
        color: "#228B22",
        imagen: "/Rock/assets/img/4.jpeg"
    },
    fuego: {
        color: "#FF4500",
        imagen: "/Rock/assets/img/5.jpeg"
    }
};

document.querySelectorAll('.opcion').forEach(opcion => {
    opcion.addEventListener('click', (event) => {
        document.querySelectorAll('.opcion').forEach(opt => {
            opt.classList.remove('seleccionado');
        });

        event.currentTarget.classList.add('seleccionado');
        eleccionUser = event.currentTarget.id;
        console.log(`La elección del usuario es: ${eleccionUser}`);

        document.body.style.backgroundColor = elementos[eleccionUser].color;

        document.querySelector('.choice').innerHTML = `<h2>${eleccionUser}</h2>`;
        document.querySelector('.choice').style.color = elementos[eleccionUser].color;
    });
});

document.getElementById('play').addEventListener('click', () => {
    document.querySelectorAll('.opcion').forEach(opcion => {
        opcion.classList.add('salida');
    });

    const elecciones = Object.keys(elementos);
    const eleccionEnemigo = elecciones[Math.floor(Math.random() * elecciones.length)];
    console.log(`La elección del enemigo es: ${eleccionEnemigo}`);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Tú elección es <strong>${eleccionUser}</strong> vs elección del ENEMIGO <strong>${eleccionEnemigo}</strong>`;
    resultadoDiv.style.display = 'block';

    let ganador = "";
    if (eleccionUser === eleccionEnemigo) {
        ganador = "¡Es un empate!";
        document.body.style.backgroundImage = `url('${elementos[eleccionUser].imagen}')`;
    } else {
        if (
            (eleccionUser === 'trueno' && (eleccionEnemigo === 'agua' || eleccionEnemigo === 'planta')) ||
            (eleccionUser === 'agua' && (eleccionEnemigo === 'fuego' || eleccionEnemigo === 'roca')) ||
            (eleccionUser === 'roca' && (eleccionEnemigo === 'trueno' || eleccionEnemigo === 'fuego')) ||
            (eleccionUser === 'planta' && (eleccionEnemigo === 'roca' || eleccionEnemigo === 'agua')) ||
            (eleccionUser === 'fuego' && (eleccionEnemigo === 'planta' || eleccionEnemigo === 'trueno'))
        ) {
            ganador = "¡Tú ganaste!";
            document.body.style.backgroundImage = `url('${elementos[eleccionUser].imagen}')`;
        } else {
            ganador = "¡El enemigo ganó!";
            document.body.style.backgroundImage = `url('${elementos[eleccionEnemigo].imagen}')`;
        }
    }

    const ganadorDiv = document.getElementById('ganador');
    ganadorDiv.innerHTML = ganador;
    ganadorDiv.style.display = 'block';

    setTimeout(() => {
        document.querySelectorAll('.opcion').forEach(opcion => {
            opcion.classList.remove('salida');
        });

        resultadoDiv.style.display = 'none';
        ganadorDiv.style.display = 'none';

        document.body.style.backgroundColor = "";
        document.body.style.backgroundImage = "";
    }, 6000);
});

document.getElementById('reset').addEventListener('click', () => {
    location.reload();
});
