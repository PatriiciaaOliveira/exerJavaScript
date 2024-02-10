function tabuada(){
    let num = document.getElementsByClassName('txtn')
    let tab = document.getElementsByClassName('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHtml=''
        while (c<=10){
            let item= document.createlent ('option')
            item.text = `${n} x ${c} = ${nc}`
            item.value = `tab ${c}`
            tab.appendchild(item)
            c++
        }
    }
}