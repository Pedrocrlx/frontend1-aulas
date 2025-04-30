import { createNews, deleteNews, getNews } from "../../api/api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const addNewsForm = document.getElementById("add_news_form");
    addNewsForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const news = {
            title: document.getElementById("news_title").value,
            description: document.getElementById("news_description").value,
        };
        const response = await createNews(news);
        console.log(response);
    });

    console.log(getNews());

    const removeNewsForm = document.getElementById("remove_news_form");
    removeNewsForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const delete_news = {
            id: document.getElementById("remove_news_id").value,
        };
        const response = await deleteNews(delete_news.id);
        console.log(response);
    });
});