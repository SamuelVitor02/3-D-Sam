const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll('.aba-conteudo');

for(let i=0;i <botoes.length;i++){ botoes[i].onclick = function() {

for(let j=0;j<botoes.length;j++) { botoes[j].classList.remove('ativo');
botoes[k].classList.remove('ativo');
textos[k].classList.remove('ativo');                                 
}
botoes[i].classList.add('ativo');
  botoes[k].classList.remove('ativo');
  textos[k].classList.remove('ativo');
 }
}

//iniciar os contadores
const contadores=document.querySelectorAll('.contador');
let dataHoje = new Date();

contadores[0]. textContent(dataHoje);
