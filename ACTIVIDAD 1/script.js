
function calcularPromedio() {
    
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Por favor, ingresa todas las notas.');
        return;
    }

    const promedio = (nota1 + nota2 + nota3) / 3;
    const resultado = document.getElementById('resultado');
    resultado.innerText = `Promedio: ${promedio.toFixed(2)}`;
    
    if (promedio >= 3) {
        resultado.innerText += ' - APRUEBA';
        resultado.style.color += 'green';
        console.log(resultado.innerHTML);
        
    } else {
        resultado.palceholder += ' - REPRUEBA';
        resultado.style.color += 'red';
        console.log(resultado.innerHTML);
    }
}

function calcularImc(){
    
    const estatura = parseFloat(document.getElementById('estatura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    
    if (isNaN(estatura) || isNaN(peso)) {
        alert('Por favor, ingresa todas los datos.');
        return;
    }
    //IMC = peso (kg) / estatura (m)^2. 
    const imc = (peso/(estatura*estatura));
    console.log(imc);
    
    const resultado = document.getElementById('resultadoImc');
    resultado.innerText = `El IMC ES : ${imc.toFixed(2)} m/kg`;
    resultado.style.color += 'green';
}

function mostrarActividad(archivo) {
    let iframe = document.getElementById("contenidoIframe");
    let section = document.getElementById("iframeSection");
    let buttonCerrar = document.getElementById("cerrarOpcion");

    iframe.src = archivo + ".html";
    section.style.display = "block"; 
    buttonCerrar.style.display = "inline";
}

function cierraOpcion() {
    let iframe = document.getElementById("contenidoIframe");
    let section = document.getElementById("iframeSection");
    let buttonCerrar = document.getElementById("cerrarOpcion");

    iframe.src = ""; 
    section.style.display = "none"; 
    buttonCerrar.style.display = "none";
}