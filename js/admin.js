const addNews = () => {
    const title = document.getElementById("news_title").value;
    const description = document.getElementById("news_description").value;
    localStorage.setItem("news_title", title);
    localStorage.setItem("news_description", description);
    console.log(title, description);
};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nameDiv").innerHTML = `
        <br>
        <div class="news_card">
            <div class="image_news">
                <img src="./img/LewisHamilton.jpeg" alt="News 1">
            </div>
            <h2 class="news_card_title">${localStorage.getItem("news_title")}</h2>
            <p class="news_card_text">${localStorage.getItem("news_description")}</p>
        </div>
    `;
});
