function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = window.document.querySelector('input#ano')
    var res = window.document.querySelector('div#resultado')
    var show = Number(fano.value)


//


if(fano.value.length == 0 || fano.value > ano || fano.value == 0) {
    window.alert(' [ERRO] Verifique os dados e tente novamente')
    res.innerHTML = `<p>Preencha os dados acima para ver o resultado! </p>`
    return
}else{
       
    var fsex = document.getElementsByName('genero')
    var idade = ano - show
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    img.height = 300
    img.width = 300
    
    

if(fsex[0].checked){
    genero = 'masculino'
    if(idade>= 0 && idade <= 10){
        img.setAttribute('src','criancaM.jpg')
    }else if (idade < 21){
        img.setAttribute('src','jovemM.jpg')
    }else if  (idade < 50){
        img.setAttribute('src','adultoM.jpg')
    }else{
        img.setAttribute('src','idosoM.jpg')
    } 
}else if(fsex[1].checked){
    genero = 'feminino'
    
    if(idade >= 0 && idade <= 10){
        img.setAttribute('src','criancaF.jpg')
    }else if (idade  < 21){
        img.setAttribute('src','jovemF.jpg')
    }else if  (idade < 50){
        img.setAttribute('src','adultoF.jpg')
    }else{
        img.setAttribute('src','idosoF.jpg')
    }
    
}
    
}
res.style.textAlign = 'center'
res.innerHTML = `o ano de nascimento é ${show}, seu sexo é ${genero} e sua idade atual é ${idade} anos<br>`
res.appendChild(img)    
}


