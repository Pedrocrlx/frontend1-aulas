import { getNews } from "../api/api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const news = await getNews();
    displayNews(news);
    diplayCarrousel(news);
    // Initialize the carousel splide.js
    new Splide('.splide', {
        perPage: 3,
        breakpoints: {
            768: {
                perPage: 1,
            },
        }
    }).mount();
});

function diplayCarrousel(news) {
    const slicedNews = news.slice(0, 6);
    slicedNews.forEach((post) => {
        const postNews = document.createElement("div");
        postNews.classList.add("splide__slide");
        postNews.innerHTML = `
            <img src="${post.image}" class="news_image_carousel" alt="${post.title}"/>
            <h2 class="news_card_title">${post.title}</h2>
    `;
        document.querySelector(".splide__list").appendChild(postNews);
    });
}

export function displayNews(news) {
    const newsList = document.getElementById("news_section");

    news.forEach((post) => {
        const postNews = document.createElement("div");
        postNews.classList.add("news_card");
        postNews.innerHTML = `
            
            <img src="${post.image}" class="news_image" alt="${post.title}"/>
            <div class="news_card_content">
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
            </div>
    `;
        newsList.appendChild(postNews);
    });
}