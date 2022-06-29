currentNumberWrapper = document.getElementById('currentNumber') //representa o currentNumber completo, representa o <span>
var currentNumber = 0 //representa apenas o valor do currentNumber, o valor que vai ser mudado.

function increment() {
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber
    
}

function decrement() {
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber
    
}

// .innerHTML mudou o valor dentro do HTML.