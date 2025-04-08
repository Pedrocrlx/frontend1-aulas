import { createNews } from "../api/api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const addNewsForm = document.getElementById("add_news_form");
    addNewsForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(addNewsForm);
        const news = {
            title: formData.get("title"),
            description: formData.get("description"),
        };
        const response = await createNews(news);
        console.log(response);
    });
});


