async function loadComponent(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    const res = await fetch(url);
    el.outerHTML = await res.text();
}

loadComponent("site-header", "./components/header.html");
loadComponent("site-footer", "./components/footer.html");

function setMenu(open) {
    const header = document.querySelector("header");
    const burger = document.querySelector(".burger");
    if (!header || !burger) return;
    header.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    burger.querySelector(".burger-label").textContent = open ? "Fermer" : "Menu";
}

document.addEventListener("click", e => {
    const header = document.querySelector("header");
    if (!header) return;

    if (e.target.closest(".burger")) {
        setMenu(!header.classList.contains("open"));
    } else if (e.target.closest("nav a") || !e.target.closest("header")) {
        setMenu(false); // clic sur un lien ou en dehors du header
    }
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") setMenu(false);
});