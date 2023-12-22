let campoA = document.getElementById("campoA");
let campoB = document.getElementById("campoB");
let form = document.getElementById('form');
//getElementById é o mesmo que "pegue os elementos pelo Id", que definimos no HTML como campoA e campoB, e também o form//

form.addEventListener("submit", function(e) {
    //addEventListener("submit") chama a função que sempre que o evento submit acontecer, ele nos retornará o que definirmos na próxima parte da sintaxe//
    e.preventDefault();
    //impedindo o comportamento reset do formulário//
    if (parseInt(campoB.value) >= parseInt(campoA.value)) {
        //parseInt para converter a string para um número inteiro - sem ele o programa só reconhecia o primeiro número, não o conjunto//
        document.querySelector('.success-message').style.display = 'block';
        document.querySelector('.failure-message').style.display = 'none';
    }
    else {
        document.querySelector('.success-message').style.display = 'none';
        document.querySelector('.failure-message').style.display = 'block';
        //document.querySelector retorna a classe selecionada (success ou failure) e o que ela fará em relação ao CSS - style (CSS) e display (mostra ou oculta)//
    }
});

function handleSubmit(event) {
    //handleSubmit é a função que define o comportamento e o addEventListener associa uma função a determinado elemento//
    event.preventDefault();
    const successMessage = document.querySelector('.success-message');
    const failureMessage = document.querySelector('.failure-message');

    setTimeout(() => {
        //setTimeout é o que define quanto tempo o meu aviso ficará na tela//
        successMessage.style.display = 'none';
        failureMessage.style.display = 'none';
    }, 5000); //5000 é igual a 5 segundos//
}

document.querySelector('form').addEventListener('submit', handleSubmit);