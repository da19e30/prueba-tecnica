let correctas = [1, 2, 3, 2, 3]; 

let opcionCorrecta = [];

let cantidadCorrecta = 0;

function respuesta(num__pregunta, seleccionada) {
    opcionCorrecta[num__pregunta] = parseInt(seleccionada.value); 
    const id = "p" + num__pregunta;
    const labels = document.getElementById(id).getElementsByTagName('label');
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.backgroundColor = "white";
    }
    seleccionada.parentNode.style.backgroundColor = "#1a245c";
}

function enviar() {
    cantidadCorrecta = 0;
    for (let i = 0; i < correctas.length; i++) {
        if (correctas[i] === opcionCorrecta[i]) {
            cantidadCorrecta++;
        }
    }
    document.getElementById("resultado").textContent = cantidadCorrecta + " respuestas correctas.";
    for (let i = 0; i < correctas.length; i++) {
        const id = "p" + i;
        const labels = document.getElementById(id).getElementsByTagName('label');
        labels[correctas[i] - 1].style.backgroundColor = "#00ff00"; 
    }
}


