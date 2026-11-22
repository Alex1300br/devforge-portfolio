// Ano automático no rodapé.
document.querySelector("#current-year").textContent = new Date().getFullYear();

// Fecha o menu responsivo do Bootstrap após selecionar uma seção.
const navElement = document.querySelector("#mainNav");
document.querySelectorAll("#mainNav .nav-link, #mainNav .btn-nav").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992 && navElement.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navElement).hide();
    }
  });
});


// Conteúdo breve exibido ao clicar em uma tecnologia ou habilidade.
const topicContent = {
  html: {mark:"HTML", title:"HTML", text:"HTML é a linguagem de marcação que organiza o conteúdo de uma página web. Com ela definimos títulos, textos, imagens, links, formulários e a estrutura semântica do site."},
  css: {mark:"CSS", title:"CSS", text:"CSS controla a apresentação visual das páginas: cores, fontes, espaçamentos, layouts e adaptação para diferentes tamanhos de tela. É o que dá identidade ao visual do site."},
  javascript: {mark:"JS", title:"JavaScript", text:"JavaScript adiciona comportamento e interatividade às páginas web, permitindo responder a cliques, atualizar conteúdos e criar experiências dinâmicas no navegador."},
  c: {mark:"C", title:"Linguagem C", text:"C é uma linguagem de programação de propósito geral, bastante usada para estudar fundamentos, estruturas de dados e como programas trabalham próximos ao sistema."},
  python: {mark:"Py", title:"Python", text:"Python é uma linguagem versátil e conhecida por sua sintaxe clara. Pode ser usada em automação, aplicações, análise de dados, jogos e muitas outras áreas."},
  mysql: {mark:"SQL", title:"MySQL", text:"MySQL é um sistema de gerenciamento de banco de dados relacional. Ele permite armazenar, consultar e organizar informações usando comandos SQL."},
  logic: {mark:"01", title:"Lógica de programação", text:"É a habilidade de organizar um problema em etapas e instruções claras. Envolve raciocínio, condições, repetições e decomposição de problemas para chegar a uma solução."},
  web: {mark:"02", title:"Desenvolvimento web", text:"Consiste em criar sites e aplicações para a internet. Envolve estruturar conteúdo com HTML, definir o visual com CSS e adicionar interatividade com JavaScript."},
  automation: {mark:"03", title:"Automação com Python", text:"É o uso de scripts para executar tarefas repetitivas com menos trabalho manual, como organizar arquivos, processar informações e integrar serviços."},
  database: {mark:"04", title:"Banco de dados", text:"Envolve modelar, armazenar e consultar informações de forma organizada. Com SQL e MySQL é possível criar tabelas, relacionar dados e realizar consultas."}
};

const topicModalElement = document.querySelector("#topicModal");
const topicModal = bootstrap.Modal.getOrCreateInstance(topicModalElement);
document.querySelectorAll("[data-topic]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const topic = topicContent[trigger.dataset.topic];
    if (!topic) return;
    document.querySelector("#topicModalMark").textContent = topic.mark;
    document.querySelector("#topicModalTitle").textContent = topic.title;
    document.querySelector("#topicModalText").textContent = topic.text;
    topicModal.show();
  });
});
