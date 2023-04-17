function cript(){

    verificar();

    let entradatxt = document.getElementById("entradatxt").value;
    
    let img = document.getElementById("img");
    img.style.display = "none";
    
    let message = document.getElementById("message");
    message.style.display = "none";
    
    let i;
    let textoCript="";
    
    for(i=0; i<entradatxt.length; i++){

        let txt;

        if(entradatxt.charAt(i)=="a"){
                
            txt= entradatxt.charAt(i)+"i";
            
        }else if(entradatxt.charAt(i)=="e"){

            txt= entradatxt.charAt(i)+"nter";

        }else if(entradatxt.charAt(i)=="i"){

            txt= entradatxt.charAt(i)+"mes";

        }else if(entradatxt.charAt(i)=="o"){

            txt= entradatxt.charAt(i)+"ber";

        }else if(entradatxt.charAt(i)=="u"){

            txt= entradatxt.charAt(i)+"fat";

        }else{
            txt = entradatxt.charAt(i);
        }

        textoCript = textoCript+txt;

    }

    exibirSaida(textoCript);
    
    let exibir = document.getElementById("exibir");
    exibir.style.display="block";

    let saidatxt = document.getElementById("saidatxt");
    exibir.style.display="flex";
    exibir.style.flexDirection="column";
    exibir.style.justifyContent="center";

}

function exibirSaida(saida){

    let saidatxt = document.getElementById("saidatxt");

    saidatxt.innerText = saida;

}

function copia(){
    
    let textInput = document.querySelector('#saidatxt');
    textInput.select();
    document.execCommand('copy');
    
}

function descript(){

    verificar();

    let entradatxt = document.getElementById("entradatxt").value;
    
    let img = document.getElementById("img");
    img.style.display = "none";
    
    let message = document.getElementById("message");
    message.style.display = "none";

    let exibir = document.getElementById("exibir");
    exibir.style.display="flex";
    exibir.style.flexDirection="column";
    exibir.style.justifyContent="center";

    let saidatxt = document.getElementById("saidatxt");
    saidatxt.style.display="block";

    entradatxt= entradatxt.replaceAll('enter', 'e');
    entradatxt= entradatxt.replaceAll('imes', 'i');
    entradatxt= entradatxt.replaceAll('ai', 'a');
    entradatxt= entradatxt.replaceAll('ober', 'o');
    entradatxt= entradatxt.replaceAll('ufat', 'u');

    textoDescript = entradatxt;

    exibirSaida(textoDescript);

}

function verificar(){

    let entradatxt = document.getElementById("entradatxt");

    if(entradatxt.value==""){
    
        alert("Você não digitou um texto");
    
    }

}