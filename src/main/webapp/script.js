document.addEventListener("DOMContentLoaded", function () {
    // Toggle de seções de conhecimentos
    const botoes = [
        { botaoId: "linguagens", conteudoId: "conteudoLinguagens" },
        { botaoId: "ferramentas", conteudoId: "conteudoFerramentas" },
        { botaoId: "outrosConhecimentos", conteudoId: "conteudoConhecimentos" },
    ];

    const todosConteudos = botoes.map(item => document.getElementById(item.conteudoId));
    // Adiciona evento de clique a cada botão
    botoes.forEach(({ botaoId, conteudoId }) => {
        const botao = document.getElementById(botaoId);
        const conteudo = document.getElementById(conteudoId);

        botao.addEventListener("click", function () {
            
            todosConteudos.forEach(c => {
                if (c !== conteudo) c.classList.remove("ativo");
            });

            
            conteudo.classList.toggle("ativo");
        });
    });

    

    // api github
    const username = "braian3471"; // coloque seu usuário GitHub
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        const container = document.getElementById('repositorios');
        repos.forEach(repo => {
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "Sem descrição"}</p>
                <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
            `;
            container.appendChild(div);
        });
    });

});
