var ListaPeca = [
    {nome:"Chave-Inglesa", peso: 500, caixa: 0},
    {nome:"Martelo", peso: 350, caixa: 0},
    {nome:"Luva", peso: 100, caixa: 0},
    {nome:"Capacete", peso: 140, caixa: 0},
    {nome:"Mouse", peso: 60, caixa: 2},
    {nome:"Teclado", peso: 80, caixa: 2},
    {nome:"Mousepad", peso: 50, caixa: 2},
    {nome:"Alcool Iso", peso: 120, caixa: 3}
];

var caixa = [
    {Descricao:"Ferramentas",PesoMinimo:100, QtdMaxima: 50},
    {Descricao:"Perifericos",PesoMinimo:50, QtdMaxima: 10},
    {Descricao:"Material Limpeza",PesoMinimo:80, QtdMaxima: 100}

];

// Verifica se o nome tem mais do que 3 letras
function vernome(nome) 
{
    let retorno = true;
    if (nome.length < 3)
    {
        retorno = false;
    }
return (retorno)
}

// Verifica o peso da peça em relação a especificação da caixa
function verPeso (pesoPeca, PesoCaixa)
{
    let retorno = false;
    if (peso <= PesoCaixa)
    {
        retorno = true;
    }
return (retorno)    
}

// Calcula quantas peças tem na caixa
function QtdPecaCaixa (Refcaixa) 
{
    let qtdpeca = 0; 
    for (index = 0; index < ListaPeca.length; index++)
    {
        if (ListaPeca[index].caixa == Refcaixa){
            qtdpeca++;
         }
    }
    return (qtdpeca);   
}

// Verifica se ainda tem espaço na caixa
function verificaEspacoCaixa(caixa_index)
{
    let 
    espacoOcupado = QtdPecaCaixa (caixa_index);
    retorno = false;
    if (espacoOcupado < caixa[caixa_index].QtdMaxima)
    {
        retorno=true;
    }
    return (retorno)
}

function addProduto(Prod,Peso,Caixa)
{
    let  novoProduto  =  {nome: Prod, peso: Peso, caixa: Caixa};
  
     ListaPeca.push(novoProduto);
     
}


// Litagem conteúdo da caixa
function listaCaixa(cx_indice){
    console.log ("Produtos da Caixa Número "+ cx_indice+ " | " + caixa[cx_indice].Descricao);
    console.log ("-------------------------------");
    for (index = 0; index < ListaPeca.length; index++) {
  
        if (ListaPeca[index].caixa == cx_indice) {
             console.log ("Produto: " +ListaPeca[index].nome + " | Peso : "+ ListaPeca[index].peso)

             }
    
    }
    console.log("------------------------------------ Fim da caixa -  " + cx_indice+ " | " + caixa[cx_indice].Descricao)
    console.log("");
}
// --------------------------------------------------------------

var
produto = "Furadeira";
pesoProd = 400; 
caixaProd = 0;



console.log ("Antes Validação");
console.log ("========================================");
listaCaixa(caixaProd);
// console.log ("Fim listagem =========================");

// Inicio de verificação

if (vernome(produto)) 
{
    if (pesoProd >= caixa[caixaProd].PesoMinimo){
        if (verificaEspacoCaixa(caixaProd)) {
            addProduto(produto,pesoProd,caixaProd);
            console.log ("Produto: " + produto + " foi adicionado na Caixa número: " + caixaProd)
        }else{ // Caixa lotada
            console.log ("Caixa sem espaço para o produto");
        }
    }else{ // Erro no Peso
        console.log ("Peso do Produto incompatível com especificação da caixa");
    }
} else { // Erro no nome
    console.log ("Produto com nome inválido")

}

console.log(" ");
console.log(" ");
console.log ("Depois da Validação");
console.log ("========================================");

console.log ("Conteudo das caixas")

for (let index  = 0; index < caixa.length; index++) {
     listaCaixa(index);
 
}
// listaCaixa(caixaProd)

