
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
        resultado.style.color = 'green';
    } else {
        resultado.innerText += ' - REPRUEBA';
        resultado.style.color = 'red';
    }
}