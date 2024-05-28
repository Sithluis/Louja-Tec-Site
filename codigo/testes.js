function darkMode() {
    const back = document.body;
    const h1 = document.querySelector("#h1");

    back.style.backgroundColor = "black";
    back.style.color = "rgb(86, 98, 204)";
    h1.style.textShadow = " 2px 2px 5px rgba(255, 255, 255, 0.267)";
    // dark:hover.style.boxShadow = "3px 3px 7px rgba(255, 255, 255, 0.267)";

    const dark = document.querySelector("#dark");

    dark.addEventListener("mouseover", function() {
        this.style.boxShadow = "3px 3px 7px rgba(255, 255, 255, 0.267)";
    });

    dark.addEventListener("mouseout", function() {
        this.style.boxShadow = "none";
    })
}

document.querySelector("#dark").addEventListener("click", darkMode); 