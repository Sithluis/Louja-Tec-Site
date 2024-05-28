function isDarkMode() {
    const bodyStyles = window.getComputedStyle(document.body);
    return bodyStyles.backgroundColor === "rgb(0, 0, 0)";
}

function toggleDarkMode() {
    const back = document.body;
    const h1 = document.querySelector("#h1");
    const dark = document.querySelector("#dark");
    const fundo2 = document.querySelector("#fundo2");
    const fundo = document.querySelector("#fundo");

    if (!isDarkMode()) {
        // Aplicar estilo para modo escuro
        back.style.backgroundColor = "black";
        back.style.color = "rgb(86, 98, 204)";
        h1.style.textShadow = "2px 2px 5px rgba(255, 255, 255, 0.220)";
        dark.style.boxShadow = "3px 3px 7px rgba(255, 255, 255, 0.267)";
        fundo.style.backgroundColor = "rgba(8, 0, 0, 0.788)";
        fundo2.style.backgroundColor = "rgba(8, 0, 0, 0.788)";
    } else {
        // Voltar aos estilos normais
        back.style.backgroundColor = ""; // Voltar à cor de fundo padrão
        back.style.color = ""; // Voltar à cor de texto padrão
        h1.style.textShadow = ""; // Remover sombra do texto
        dark.style.boxShadow = ""; // Remover sombra do botão
        fundo.style.backgroundColor = "";
        fundo2.style.backgroundColor = "";
    }
}

document.querySelector("#dark").addEventListener("click", toggleDarkMode);
