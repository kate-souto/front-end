async function consulta(){
        
    let cnpj = document.querySelector('#cnpj').value;
    const url='https://brasilapi.com.br/api/cnpj/v1/'+cnpj;
    try{
        let resposta=  await fetch(url);
        let js = await resposta.json();
        mostraDados(js);
    }catch(err) {
        const painel = document.querySelector('#mostra');
        let texto= `<h1>Problema no acesso aos dados</h1>
                    Tipo do erro:${err.name}<br>
                    Mensagem completa:${err}`;
        painel.innerHTML = texto; 
    }
}       
function mostraDados(js){
    const painel = document.querySelector('#mostra');
    let texto= `<h1>Dados solicitados</h1>
                Estado: ${js.uf}<br>
                Cidade: ${js.municipio}<br>
                Bairro: ${js.bairro}<br>
                Número: ${js.numero}<br>`;
    painel.innerHTML = texto;
}


document.querySelector('#enviar').addEventListener('click',consulta);