//listener
document.querySelector("#b11").addEventListener("click", verifica1);
document.querySelector("#b12").addEventListener("click", erro1);
document.querySelector("#b13").addEventListener("click", erro1);
document.querySelector("#b14").addEventListener("click", erro1);
document.querySelector("#r2").addEventListener("click", responde2);


document.querySelector("#b22").addEventListener("click", verifica2);
document.querySelector("#b21").addEventListener("click", erro2);
document.querySelector("#b23").addEventListener("click", erro2);
document.querySelector("#b24").addEventListener("click", erro2);
document.querySelector("#r3").addEventListener("click", responde3);


document.querySelector("#b33").addEventListener("click", verifica3);
document.querySelector("#b31").addEventListener("click", erro3);
document.querySelector("#b32").addEventListener("click", erro3);
document.querySelector("#b34").addEventListener("click", erro3);


//funcoes
function verifica1(){
        document.querySelector("#resposta1").style.display="block";
        document.querySelector("#erro1").style.display="none";
        document.querySelector("#r2").style.display="block";
        document.querySelector("#b12").style.display="none";
        document.querySelector("#b13").style.display="none";
        document.querySelector("#b14").style.display="none";
}

function erro1(){
    document.querySelector("#erro1").style.display="block";
}

function responde2(){
    document.querySelector("#pergunta2").style.display="block"
    document.querySelector("#r2").style.display="none"
}



function verifica2(){
    document.querySelector("#resposta2").style.display="block";
    document.querySelector("#erro2").style.display="none";
    document.querySelector("#r3").style.display="block";
    document.querySelector("#b21").style.display="none";
    document.querySelector("#b23").style.display="none";
    document.querySelector("#b24").style.display="none";
}

function erro2(){
document.querySelector("#erro2").style.display="block";
}

function responde3(){
document.querySelector("#pergunta3").style.display="block"
    document.querySelector("#r3").style.display="none"
}



function verifica3(){
    document.querySelector("#resposta3").style.display="block";
    document.querySelector("#erro3").style.display="none";
    document.querySelector("#b32").style.display="none";
    document.querySelector("#b31").style.display="none";
    document.querySelector("#b34").style.display="none";
}

function erro3(){
document.querySelector("#erro3").style.display="block";
}
