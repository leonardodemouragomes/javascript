let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*
for (pos = 0; pos < valores.length; pos++){
    pos2 = pos +1
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

.indexOf(valor) mostra a posição do valor na Array
Se não achar o valor ele retorna -1 
*/

for(let pos in valores) {
    console.log(valores[pos])
}