function calcular(){
    tabuada.innerHTML = '' 
    let n = Number(num.value)
    if(n == ''){
        window.alert('Inválido')
    }else{
        for(let pos = 1;pos <= 10; pos++){
        let res = n*pos
        tabuada.innerHTML += `${n} x ${pos} = ${res}<br>`
        }
    }
    
    
}