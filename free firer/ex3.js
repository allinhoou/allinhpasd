const produto = {
    Nome: "Tenis",
    Preco: 20,
    Quantidade: "45"
}
console.log("Nome;", produto.Nome)
console.log("Preco;", produto.Preco)
console.log("Quantidade;", produto.Quantidade)

produto.descrever = function(){
    return `O ${this.Nome}, custa R$ ${this.Preco}, 00 o estoque tem ${this.Quantidade}.`
}

produto.Preco = 26;
produto.Nome = "Tenis";

console.log(produto.descrever());
