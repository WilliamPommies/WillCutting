async function loadComponent(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    const res = await fetch(url);
    el.outerHTML = await res.text();
}

loadComponent("site-header", "./components/header.html");
loadComponent("site-footer", "./components/footer.html");