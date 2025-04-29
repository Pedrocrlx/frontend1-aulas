import { getNews } from "../api/api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const news = await getNews();
    displayNews(news);
    diplayCarrousel(news);
    // Initialize the carousel splide.js
    var splide = new Splide('.splide');
    splide.mount();
});


function diplayCarrousel(news) {
    const slicedNews = news.slice(0, 3);
    slicedNews.forEach((post) => {
        const postNews = document.createElement("div");
        postNews.classList.add("splide__slide");
        postNews.innerHTML = `
            <img src="${post.image}" class="news_card_carousel" alt="${post.title}"/>
            <h2 class="news_card_title">${post.title}</h2>
            <p class="news_text_carousel">${post.description}</p>
    `;
        document.querySelector(".splide__list").appendChild(postNews);
    });
    console.log(slicedNews, "CAROUSEL NEWS");
}

export function displayNews(news) {
    const newsList = document.getElementById("news_section");

    news.forEach((post) => {
        const postNews = document.createElement("div");
        postNews.classList.add("news_card");
        postNews.innerHTML = `
            <div class="image_news">
                <img src="${post.image}" alt="${post.title}"/>
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
            }</p>
    `;
        newsList.appendChild(postNews);
    });
}