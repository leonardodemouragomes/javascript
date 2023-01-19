function contar(){
    res.innerHTML +='Contando:<br>'
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
    for(n = num1;num2 - n >= passo; n += passo){
        res.innerHTML += `${n} &#x2764`
    }
    if(num2 - n ==0){
        res.innerHTML += n
    }
    res.innerHTML += '&#x1F3C1'
}