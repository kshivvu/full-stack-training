const container = document.getElementById("news-container");

async function fetchNews(query) {

    const url = `https://hn.algolia.com/api/v1/search?query=${query}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log("data:", data);

    showNews(data.hits);
}

function showNews(news) {

    container.innerHTML = "";

    news.forEach(article => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${article.title || "No Title"}</h3>
            <p>Author: ${article.author}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;

        container.appendChild(card);
    });

}

function getNews() {

    const topic = document.getElementById("topic").value;

    if(topic==="") return;

    fetchNews(topic);
}

window.onload = () => {
    fetchNews("technology");
};