var registro=[]
function resetar(){
    cont=0
    um.innerHTML=""
    dois.innerHTML=""
    tres.innerHTML=""
    quatro.innerHTML=""
    cinco.innerHTML=""
    seis.innerHTML=""
    sete.innerHTML=""
    oito.innerHTML=""
    nove.innerHTML=""
}
function iniciar(){
    if(jogador_um.value!="" && jogador_dois.value!=""){

        var jogadores ={
            player_one:(jogador_um.value).toUpperCase(),
            player_two:(jogador_dois.value).toUpperCase()
        }
        registro.push(jogadores)
    abaCadastro.style.display="none"
    container_jogo.style.display="flex"
    }else{
        alert("preencha os campos")
    }
   box_click()
}
var cont = 0;
function box_click(){
    if(cont%2==0){
        vez.innerHTML=`VEZ DO JOGADOR ${registro[0].player_one}`
    }else{
        vez.innerHTML=`VEZ DO JOGADOR ${registro[0].player_two}`

    }
}
function um_click() {
    var verifico=um.innerHTML
    if(verifico==""){
        vaiRodar.play()
        cont++

        if (cont % 2 == 0) {
            um.innerHTML = `<img class="img_click" src="./img/o.png" alt="">`
        } else {
            um.innerHTML = `<img class="img_click" src="./img/x.png" alt="">`
            
        }
    }else{
        naoRoda.play()
    }
} function dois_click() {
    var verifico=dois.innerHTML
    if(verifico==""){
        vaiRodar.play()

        cont++

    if (cont % 2 == 0) {
        dois.innerHTML = `<img class="img_click" src="./img/o.png" alt="">`
    } else {
        dois.innerHTML = `<img class="img_click" src="./img/x.png" alt="">`

    }
}else{
        naoRoda.play()
    }
} function tres_click() {
    var verifico=tres.innerHTML
    if(verifico==""){
        vaiRodar.play()
        
        cont++
        
        if (cont % 2 == 0) {
            tres.innerHTML = `<img class="img_click" src="./img/o.png" alt="">`
        } else {
            tres.innerHTML = `<img class="img_click" src="./img/x.png" alt="">`
            
        }
}else{
        naoRoda.play()
    }
} function quatro_click() {
    var verifico=quatro.innerHTML
    if(verifico==""){
        vaiRodar.play()

        cont++

    if (cont % 2 == 0) {
        quatro.innerHTML = `<img class="img_click" src="./img/o.png" alt="">`
    } else {
        quatro.innerHTML = `<img class="img_click" src="./img/x.png" alt="">`

    }
}else{
        naoRoda.play()
    }
} function cinco_click() {
    var verifico=cinco.innerHTML
    if(verifico==""){
        vaiRodar.play()

        cont++

    if (cont % 2 == 0) {
        cinco.innerHTML = `<img class="img_click" src="./img/o.png" alt="">`
    } else {
        cinco.innerHTML = `<img class="img_click" src="./img/x.png" alt="">`

    }
}else{
        naoRoda.play()
    }
} function seis_click() {
    var verifico=seis.innerHTML
    if(verifico==""){
        vaiRodar.play()

        cont++

    if (cont % 2 == 0) {
        seis.innerHTML = `<img class="img_click" src="./img/o.png" alt="">`
    } else {
        seis.innerHTML = `<img class="img_click" src="./img/x.png" alt="">`

    }
}else{
        naoRoda.play()
    }
} function sete_click() {
    var verifico=sete.innerHTML
    if(verifico==""){
        vaiRodar.play()

        cont++
        
    if (cont % 2 == 0) {
        sete.innerHTML = `<img class="img_click" src="./img/o.png" alt="">`
    } else {
        sete.innerHTML = `<img class="img_click" src="./img/x.png" alt="">`

    }
}else{
        naoRoda.play()
    }
} function oito_click() {
    var verifico=oito.innerHTML
    if(verifico==""){
        vaiRodar.play()

        cont++

    if (cont % 2 == 0) {
        oito.innerHTML = `<img class="img_click" src="./img/o.png" alt="">`
    } else {
        oito.innerHTML = `<img class="img_click" src="./img/x.png" alt="">`

    }
}else{
        naoRoda.play()
    }
} function nove_click() {
    var verifico=nove.innerHTML
    if(verifico==""){
        vaiRodar.play()

        cont++

    if (cont % 2 == 0) {
        nove.innerHTML = `<img class="img_click" src="./img/o.png" alt="">`
    } else {
        nove.innerHTML = `<img class="img_click" src="./img/x.png" alt="">`
    }
}else{
        naoRoda.play()
    }
}

