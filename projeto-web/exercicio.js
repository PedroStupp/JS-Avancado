filmes = [
    {
        nome: "Vingadores",
        duracao: 120,
        classificacao: 5,
        atores: [
            {
                nome: "Robert Downey Junior",
                idade: 59,
                filmes: ["Sherlok Homes", "O Juiz"]

            },
            {
                nome: "Scarlett Johansson",
                idade: 39
            },
            {
                nome: "Chris Evans",
                idade: 43
            }
        ]
    }
]

function cadastrarFilme(nome, duracao, classificacao) {
    let filme = {
        nome: nome,
        duracao: duracao,
        classificacaoFilme: classificacao
    }
}

function obterIndiceDoFilme(filmeParaBuscar) {
    let indiceFilmeNoVetor = filmes.findIndex(
        filme => filme.nome.toLowerCase() === filmeParaBuscar.toLowerCase().trim()
    );
    return indiceFilmeNoVetor;
}



function cadastrarAtor(filme, nome, idade) {
    
}
function obterIndiceAtores(atoreParaBuscar, indiceFilme) {
    let filmeEncontrado = filmes[indiceFilme];
    
    let indiceAtorNoVetor = filmeEncontrado.atores.findIndexx(
        x => x.nome.toLowerCase().trim() === atoreParaBuscar.toLowerCase().trim()
    )
    return indiceAtorNoVetor;
}
function cadastrarAtuacao(filme, ator, nomeOutroFilme) {
    
}
function listarFilmes() {
    for (let i = 0; i < filmes.length; i++) {
        let filme = filmes[i];
        console.log("Filme:" + filme.nome, "\n\Duração:" + "\n\Atores:")
        for (let i = 0; i < filme.atores.length; i++) {
            let ator = filme.atores[i];
        
        }
    }
}


cadastrarFilme("nome, duracao, classificacao")

listarFilmes()