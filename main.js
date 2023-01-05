function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido.');
    } 


}

const listaDeTeclas = document.querySelectorAll('.tecla');

let cont = 0;

for (let cont = 0; cont < listaDeTeclas.length; cont++) {
    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {
        
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');    
        }


    }  
    
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    

    

}

