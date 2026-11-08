Save Point — blog sobre games

Trabalho da disciplina de Front-end (AOP2) do curso de Análise e Desenvolvimento de Sistemas
da UVV – Universidade Vila Velha**, polo Domingos Martins.

Criadores:Matheus Rodrigues Dantas e Vinícius Carneiro de Oliveira.

O que é

Um blog estático sobre games, feito só com HTML, CSS e um pouco de JavaScript (sem frameworks e sem build).
Tema escolhido: Games.

| Página | Arquivo | Conteúdo 

| Home | `index.html` | resumo do blog, os três conteúdos em destaque (imagem + descrição, com a imagem levando à página) e os últimos posts |
| Lançamentos | `lancamentos.html` | calendário do mês, os três lançamentos que valem a atenção e o que entra nas assinaturas |
| Análises | `analises.html` | critérios de nota, tabela de faixas e três análises com nota |
| Guias | `guias.html` | setup gamer econômico, jogos cooperativos para iniciantes e como aproveitar promoções |
| Contatos | `contatos.html` | formulário com validação no navegador, outros canais e perguntas frequentes |

Estrutura dos arquivos

save-point/
├── index.html · lancamentos.html · analises.html · guias.html · contatos.html
├── css/style.css      tokens de cor, layout, componentes e regras responsivas
├── js/main.js         menu do celular (aria-expanded) e validação do formulário de contato
├── img/*.svg          ilustrações próprias (hero, capas das seções, miniaturas dos posts, favicon)
└── README.md

Como rodar

abra o `index.html` no navegador. Para publicar, basta subir a pasta para um repositório
no GitHub e ligar o **GitHub Pages** (Settings → Pages → Deploy from a branch → `main` / root). Os caminhos são
relativos, então o site funciona em `https://usuario.github.io/save-point/`.

Créditos

Feito por Matheus e Vinícius.
