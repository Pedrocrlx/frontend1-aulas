import { getNews } from "../api/api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const news = await getNews();
    displayNews(news);
});

export function displayNews(news) {
    const newsList = document.getElementById("news_section");
    news.forEach((post) => {
        const postNews = document.createElement("div");
        postNews.classList.add("news_card");
        postNews.innerHTML = `
            <div class="image_news">
                <img src="${post.image}" alt="" class="news_card_image">
            </div>
            <h2 class="news_card_title">${post.title}</h2>
            <p class="news_card_text">${post.description}</p>
            <p class="news_card_date">${new Date(
            post.createdAt
        ).toLocaleDateString("pt-PT", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
            }</p >
    `;
        newsList.appendChild(postNews);
    });
}

