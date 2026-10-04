(async function () {
    const main = document.getElementById("post");
    const slug = new URLSearchParams(location.search).get("post");

    // On n'accepte que des slugs simples, pour éviter de charger n'importe quoi
    if (!slug || !/^[a-z0-9-]+$/i.test(slug)) {
        main.innerHTML = "<h1>Article introuvable</h1>";
        return;
    }

    try {
        const res = await fetch(`./blog/${slug}.html`);
        if (!res.ok) throw new Error(res.status);
        main.innerHTML = await res.text();

        const h1 = main.querySelector("h1");
        if (h1) document.title = `${h1.textContent} — WillCutting Photography`;
    } catch (e) {
        main.innerHTML = "<h1>Article introuvable</h1>";
    }
})();