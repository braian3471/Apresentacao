document.addEventListener("DOMContentLoaded", function () {
    const botoes = [
        { botaoId: "linguagens", conteudoId: "conteudoLinguagens" },
        { botaoId: "ferramentas", conteudoId: "conteudoFerramentas" },
        { botaoId: "outrosConhecimentos", conteudoId: "conteudoConhecimentos" },
    ];

    const todosConteudos = botoes.map(item => document.getElementById(item.conteudoId));

    botoes.forEach(({ botaoId, conteudoId }) => {
        const botao = document.getElementById(botaoId);
        const conteudo = document.getElementById(conteudoId);

        botao.addEventListener("click", function () {
            // Esconde todos os outros conteúdos
            todosConteudos.forEach(c => {
                if (c !== conteudo) c.classList.remove("ativo");
            });

            // Alterna só o conteúdo clicado
            conteudo.classList.toggle("ativo");
        });
    });
});
