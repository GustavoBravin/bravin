class Produto {
    constructor(nome,cadastro, descricao ,preco){
this.nome = nome;
this.cadastro = cadastro;
this.descricao = descricao;
this.preco = preco;
}

Mostrar_produtos(){
    return `<div>${this.nome}</div> 
    <div>${this.cadastro}</div> 
    <div>${this.descricao}</div> 
    <div>${this.preco}</div> `
    
}

}

class ProdutoDestaque extends Produto{
constructor(nome,cadastro, descricao ,preco , imagem){
super(nome,cadastro, descricao ,preco)
this.imagem = imagem;
}
Mostrar_produtos_destaque(){
    return this.nome + this.cadastro + this.descricao + this.preco + this.imagem

}

}
let produto = new Produto("Garrafa","GBravin","carrega liquidos",30)
console.log(produto.Mostrar_produtos())
 
let produtodestaque = new ProdutoDestaque("Garrafa "," Bravin"," carrega liquidos ", 30," www.imagem.com")
console.log(produtodestaque.Mostrar_produtos_destaque())

const div = document.getElementById("destaque")
div.insertAdjacentHTML("afterbegin", produto.Mostrar_produtos)
