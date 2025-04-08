import { getNews } from "../api/api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const news = await getNews();
    displayNews(news);
});

function displayNews(news) {
    const newsList = document.getElementById("news_section");
    news.forEach((post) => {
        const postNews = document.createElement("div");

        postNews.classList.add("news_card");
        postNews.innerHTML = `
            <div class="image_news">
                <img src="./img/LewisHamilton.jpeg" alt="" class="news_card_image">
            </div>
            <h2 class="news_card_title">${post.title}</h2>
            <p class="news_card_text">${post.description}</p>
            <p class="news_card_text">${post.createdAt}</p>
        `;
        newsList.appendChild(postNews);
    });
}

