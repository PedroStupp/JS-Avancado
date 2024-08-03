/* 
Create => permitir cadastrar
Read => permitir visualizar
Update => permitir alterar
Delete => permitir apagar
*/

function cadastrar(nomeFilme) {
    let filme = {
        "nome": nomeFilme
    }

    fetch("http://localhost:3000/filmes", {
        method: "post",
        body: JSON.stringify(filme)
    })
}

async function obterTodos() {
    let resposta = await fetch("http://localhost:3000/filmes", {
        method: "get"
    });

    if (resposta.ok) {
        let filmes = resposta.json();
        return filmes;
    }

    console.error("Ocorreu um erro ao consultar as filmes");
    return null;

}

async function obterMarcaPorNome(nome) {
    let filmes = await obterTodos();
    if (filmes === null)
        return null;

    for (let i = 0; i < filmes.length; i++) {
        let filme = marcas[i];
        if (filme.nome === nome)
            return filme;
    }

    return null;
}

function apagarPorId(id) {
    fetch(`http://localhost:3000/filmes/${id}`, {
        method: "DELETE"
    })

        .then(requisicao => {
            if (requisicao.ok)
                console.log("Filme apagado com sucesso");
            else
                console.log(`Não encontrado filme com o id ${id}`);
        })
        .catch(erro => console.error("Não foi possível apagar"));
}

function alterar(id, nome) {
    let filme = {
        "nome": nome
    }
    fetch(`http://localhost:3000/filmes/${id}`, {
        method: "PUT",
        body: JSON.stringify(filme)
    })
        .then(response => {
            if (response.ok === false) {
                console.log(`Filme não altera pois não foi possivel entrar com o ${id}`);
                return;
            }
            console.log("Filme alterada com sucesso");
        })
        .catch(error => console.error("Não foi possível alterar a filme"));
}

async function apagarPorNome(nome) {
    let marca = await obterMarcaPorNome(nome);          
    if (marca === null) {
        console.log(`Não encontrada filme com o nome ${nome}`);
        return;
    }
    apagarPorId(marca.id);

}

async function apresentarTodos() {
    let marcas = await obterTodos ();
    console.log("Marcas");

    for (let index = 0; index < marcas.length; index++) {
        const marca = marcas [index];
        console.log (`Id: ${marca.id} Nome: ${marca.nome}`)
    }
}


//apagarPorNome("Radeon");
cadastrar("Rock Dog");
//cadastrar("Razer");

obterTodos();
//alterar("", "");
