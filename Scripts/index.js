const display = document.getElementById('display');
const btnDisplay = document.getElementById('power');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn0 = document.getElementById('0');
const numbers = document.getElementsByClassName('number');
const simbol = document.getElementById('simbol');
const calculator = document.getElementsByClassName('content');
const calculatorTransparent = document.getElementsByClassName('content_transparent')




btnDisplay.addEventListener('click', (e) => {
    if (btnDisplay.innerHTML === 'Ligar') {
        display.innerHTML = 0; // Mostra 0 no display quando liga
        btnDisplay.innerHTML = 'Desligar'; // Altera o texto do botão para "Desligar"
    } else {
        display.innerHTML = ''; // Limpa o display ao desligar
        btnDisplay.innerHTML = 'Ligar'; // Altera o texto do botão de volta para "Ligar"
    }
});


// Função para lidar com os cliques nos botões numéricos
function handleNumberClick(number) {
    if (btnDisplay.innerHTML === 'Desligar') {
        if (display.innerHTML === '0' && number !== 0) {
            display.innerHTML = number; // Substitui o 0 pelo número clicado (diferente de 0)
        } else {
            display.innerHTML += number; // Adiciona o número ao display
        }
    }
}

// Adicionando eventos aos botões numéricos
btn7.addEventListener('click', () => handleNumberClick(7));
btn8.addEventListener('click', () => handleNumberClick(8));
btn9.addEventListener('click', () => handleNumberClick(9));
btn4.addEventListener('click', () => handleNumberClick(4));
btn5.addEventListener('click', () => handleNumberClick(5));
btn6.addEventListener('click', () => handleNumberClick(6));
btn1.addEventListener('click', () => handleNumberClick(1));
btn2.addEventListener('click', () => handleNumberClick(2));
btn3.addEventListener('click', () => handleNumberClick(3));
btn0.addEventListener('click', () => handleNumberClick(0));




simbol.addEventListener('click', (e) => {
    if (calculator[0].classList.contains('content_transparent')) {
        calculator[0].classList.remove('content_transparent'); // Faz o elemento reaparecer
        simbol.innerHTML = "<i class='bx bx-up-arrow-alt'></i>";

    } else {
        calculator[0].classList.add('content_transparent'); // Faz o elemento desaparecer
        simbol.innerHTML = "<i class='bx bx-down-arrow-alt' ></i>";
    }
});