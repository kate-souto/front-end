async function feriados(){
        
    const url='https://brasilapi.com.br/api/feriados/v1/2026';
    try{
        let resposta=  await fetch(url);
        let js = await resposta.json();
        mostraDadosF(js);
    }catch(err) {
        let texto= `<h1>Problema no acesso aos dados</h1>
                    Tipo do erro:${err.name}<br>
                    Mensagem completa:${err}`;
        painel.innerHTML = texto; 
    }
}       

function mostraDadosF(js){

    texto+= 
    `<h2>Feriados de 2026</h2>`;
    js.forEach(element => {
        texto+=`<br>Nome: ${element.name}
                <br>Data: ${element.date}<br>`
    });
            
    painel.innerHTML = texto;
}





async function cep(){
        
    const url='https://brasilapi.com.br/api/cep/v1/96201460';
    try{
        let resposta=  await fetch(url);
        let js = await resposta.json();
        mostraDadosC(js);
    }catch(err) {
        let texto= `<h1>Problema no acesso aos dados</h1>
                    Tipo do erro:${err.name}<br>
                    Mensagem completa:${err}`;
        painel.innerHTML = texto; 
    }
}       

function mostraDadosC(js){

    texto+= 
                `<h2>CEP do IFRS Campus Rio Grande</h2>
                Cidade:${js.city}<br>
                Estado:${js.state}<br>
                CEP: ${js.cep}<br>`;
            
    painel.innerHTML = texto;
}






async function ibge(){
        
    const url='https://brasilapi.com.br/api/ibge/uf/v1/RS';
    try{
        let resposta=  await fetch(url);
        let js = await resposta.json();
        mostraDadosI(js);
    }catch(err) {
        let texto= `<h1>Problema no acesso aos dados</h1>
                    Tipo do erro:${err.name}<br>
                    Mensagem completa:${err}`;
        painel.innerHTML = texto; 
    }
}       

function mostraDadosI(js){

    texto+= 
                `<h2>Informações RS</h2>
                Nome:${js.nome}<br>
                Sigla:${js.sigla}<br>
                ID: ${js.id}<br>`;
            
    painel.innerHTML = texto;
}


//main
const painel = document.querySelector('#mostra');
let texto= ``;
feriados();
cep();
ibge();

