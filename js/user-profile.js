function toggleTheme() {
    let currentTheme = document.body.getAttribute("data-theme");
    if (currentTheme === "dark") {
        document.body.setAttribute("data-theme", "light");
        document.querySelector("link[href='asana-styles.css']").href = "light-styles.css"; // Asume que tienes un archivo 'light-styles.css' para el tema claro
    } else {
        document.body.setAttribute("data-theme", "dark");
        document.querySelector("link[href='light-styles.css']").href = "asana-styles.css"; 
    }
}