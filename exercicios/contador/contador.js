function contar(){
    /*
    let num = [Number(n1.value), Number(n2.value), Number(p.value), 0]
    for(num[3] = num[0] ;num[1] - num[3] >= num[2]; num[3] += num[2]){
        res.innerHTML += `${num[3]} &#x1F449`
    }
    if(num[1] - num[3] == 0){
        res.innerHTML += num[3]
    }
    */
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let passo = Number(p.value)
    let n = 0
    if(num1 == 0 || num2 == 0){
        res.innerHTML += 'Impossível contar'
    }else if(passo == 0){
        window.alert('Número de passos inválidos, o mínimo de passos é 1')
        res.innerHTML +='<br>Contando:<br>'
        for(n = num1;n < num2; n += passo){
            res.innerHTML += `${n} &#x1F449`
        }
        if(n == num2){
            res.innerHTML += n
        }
        res.innerHTML += '&#x1F3C1'
    }else{
        res.innerHTML +='<br>Contando:<br>'
        for(n = num1;n < num2; n += passo){
            res.innerHTML += `${n} &#x1F449`
        }
        if(n == num2){
            res.innerHTML += n
        }
        res.innerHTML += '&#x1F3C1'
    }
}