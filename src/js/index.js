// passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
// const botao1 = document.getElementById('botao1')
const imagens = document.querySelectorAll('.imagem');

// passo 2
botoesCarrossel.forEach((botao,indice) => {
    botao.addEventListener('click',() =>{
        
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

    
        imagens[indice].classList.add(('ativa'));

    } )
})