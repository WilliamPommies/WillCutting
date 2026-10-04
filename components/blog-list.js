(async function () {
    const container = document.getElementById("posts");
    try {
        const res = await fetch("./blog/posts.json");
        const posts = await res.json();
        posts.sort((a, b) => b.date.localeCompare(a.date)); // plus récent d'abord

        container.innerHTML = posts.map(p => `
            <a class="post-card ${p.cover ? "has-cover" : ""}"
            href="./article.html?post=${encodeURIComponent(p.slug)}"
            ${p.cover ? `style="background-image: url('${p.cover}')"` : ""}>
                <div>
                    <h2>${p.title}</h2>
                    <time datetime="${p.date}">${new Date(p.date).toLocaleDateString("fr-FR", { dateStyle: "long" })}</time>
                    <p>${p.excerpt ?? ""}</p>
                </div>
            </a>
        `).join("");
    } catch (e) {
        container.innerHTML = "<p>Impossible de charger les articles.</p>";
    }
})();