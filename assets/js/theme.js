document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("theme-toggle");

    // aplicar tema salvo
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
    }

    // clique no botão
    if (toggle) {
        toggle.addEventListener("click", () => {
            document.documentElement.classList.toggle("dark");

            if (document.documentElement.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }

});