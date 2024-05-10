const pessoa ={
    nome:"Miguel",
    idade: 30,
    profissao:"Bombeiro",
};


function exebirInformacoes(pessoa){
    console.log(`Nome: ${pessoa.nome}`)
    console.log(`Idade: ${pessoa.idade}`)
    console.log(`Profissão: ${pessoa.profissao}`)
}

function AtualizarProfissao(pessoa, novaProfissao, novaIdade){
    pessoa.profissao = novaProfissao;
    pessoa.idade = novaIdade;

}

console.log("Informações da Pessoa");
exebirInformacoes(pessoa);

AtualizarProfissao(pessoa, "Policial", 34);


console.log("\nInformações da Pessoa após autalização");
exebirInformacoes(pessoa);