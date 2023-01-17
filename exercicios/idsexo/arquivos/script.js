function carregar(){
    var maxano = new Date()
    maxano = maxano.getFullYear()
    ano.max = maxano
}

function verificar(){
    var anoAtual = new Date()
    anoAtual = anoAtual.getFullYear()
    var idade = anoAtual - Number(ano.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(ano.value == 0 || ano.value > anoAtual){
     window.alert('[ERRO] Tente Novamente')  
    } else {
        var fsex = document.getElementsByName('sexo')
        var genero = ''
        if(fsex[0].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade <=3){
               img.setAttribute('src', '../imagens/mulher/bebe.jpg')
            } else if(idade < 14){
                img.setAttribute('src', '../imagens/mulher/criança.jpg')
             } else if(idade < 18){
                img.setAttribute('src', '../imagens/mulher/adolescente.jpg')
             } else if(idade < 60){
                img.setAttribute('src', '../imagens/mulher/adulta.jpg')
             } else{
                img.setAttribute('src', '../imagens/mulher/velha.jpg')
             }
            
        } else if(fsex[1].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <=3){
                img.setAttribute('src', '../imagens/homem/bebe.jpg')
             } else if(idade < 14){
                 img.setAttribute('src', '../imagens/homem/garoto.jpg')
              } else if(idade < 18){
                 img.setAttribute('src', '../imagens/homem/adolescente.jpg')
              } else if(idade < 60){
                 img.setAttribute('src', '../imagens/homem/adulto.jpg')
              } else{
                 img.setAttribute('src', '../imagens/homem/velho.jpg')
              }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }
}
    