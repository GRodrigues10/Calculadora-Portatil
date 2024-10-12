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
const btnPonto = document.getElementById('btnPonto');
const numbers = document.getElementsByClassName('number');
const simbol = document.getElementById('simbol');
const calculator = document.getElementsByClassName('content');
const calculatorTransparent = document.getElementsByClassName('content_transparent')
const sum = document.getElementById('sum');
const sub = document.getElementById('sub');
const mult = document.getElementById('mult');
const div = document.getElementById('div');
const equal = document.getElementById('equal');
const limpar = document.getElementById('limpar');
// let audio = new Audio('./Assets/bip.m4a');




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

function handleOperatorClick(operator) {
    if (btnDisplay.innerHTML === 'Desligar') {
        // Verifica se o display está vazio ou se termina com um operador
        if (display.innerHTML === '' || ['+', '-', '*', '/'].includes(display.innerHTML.slice(-1))) {
            return; // Não adiciona se estiver vazio ou terminar com um operador
        } else {
            display.innerHTML += operator; // Adiciona o operador ao display
        }
    }
}

// Adicionando eventos aos botões de operadores


sum.addEventListener('click', () => handleOperatorClick('+'));
sub.addEventListener('click', () => handleOperatorClick('-'));
mult.addEventListener('click', () => handleOperatorClick('*'));
div.addEventListener('click', () => handleOperatorClick('/'));




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
btnPonto.addEventListener('click', () => handleNumberClick('.'));







simbol.addEventListener('click', (e) => {
    if (calculator[0].classList.contains('content_transparent')) {
        calculator[0].classList.remove('content_transparent'); // Faz o elemento reaparecer
        simbol.innerHTML = "<i class='bx bx-up-arrow-alt'></i>";

    } else {
        calculator[0].classList.add('content_transparent'); // Faz o elemento desaparecer
        simbol.innerHTML = "<i class='bx bx-down-arrow-alt' ></i>";
    }
});

equal.addEventListener('click', (e)=>{
    if(btnDisplay.innerHTML === 'Desligar'){
        try {
            if(display.innerHTML !== ''){
                display.innerHTML = eval(display.innerHTML).toFixed(2);
            }
        } catch (error) {
            display.innerHTML = 'Error'
        }
    }
})


limpar.addEventListener('click', (e)=>{
    if(btnDisplay.innerHTML === 'Desligar'){
        display.innerHTML = '';
    }
})