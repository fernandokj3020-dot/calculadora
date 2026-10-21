// Esperamos a que cargue todo el DOM
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formCalculadora');
    const inputNum1 = document.getElementById('numero1');
    const inputNum2 = document.getElementById('numero2');
    const divResultado = document.getElementById('resultado');

    form.addEventListener('submit', (e) => {
        // Evitamos que el formulario recargue la página
        e.preventDefault();

        // Obtenemos los valores y los convertimos a números flotantes
        const num1 = parseFloat(inputNum1.value);
        const num2 = parseFloat(inputNum2.value);

        // Validamos que sean números válidos
        if (isNaN(num1) || isNaN(num2)) {
            divResultado.innerHTML = `<p class="error">Por favor, ingresa números válidos.</p>`;
            return;
        }

        // Realizamos las operaciones
        const suma = num1 + num2;
        const resta = num1 - num2;
        const multiplicacion = num1 * num2;
        
        // Validamos división entre cero
        let division;
        if (num2 === 0) {
            division = 'No se puede dividir entre 0';
        } else {
            division = (num1 / num2).toFixed(4); // Limitamos a 4 decimales por prolijidad
        }

        // Mostramos los resultados en el contenedor
        divResultado.innerHTML = `
            <ul class="lista-resultados">
                <li><strong>Suma:</strong> ${num1} + ${num2} = <strong>${suma}</strong></li>
                <li><strong>Resta:</strong> ${num1} - ${num2} = <strong>${resta}</strong></li>
                <li><strong>Multiplicación:</strong> ${num1} × ${num2} = <strong>${multiplicacion}</strong></li>
                <li><strong>División:</strong> ${num1} ÷ ${num2} = <strong>${division}</strong></li>
            </ul>
        `;
    });
});