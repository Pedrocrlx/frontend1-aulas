const news = {
    title: "",
    description: "",
    date: "03-04-25",
}

document.addEventListener("DOMContentLoaded", function () {
    fetchNews();
    // Obtém o ano atual
    const currentYear = new Date().getFullYear();
    // Preenche o ano no elemento com o id "currentYear"
    document.getElementById("currentYear").textContent = currentYear;
});

async function fetchNews() {
    try {
        const response = await fetch("js/news.json");
        const data = await response.json();
        renderNews(data);
    } catch (error) {
        console.error(error);
    }
}

function renderNews(data) {
    const newsTitle = document.getElementById("news_title");
    const newsDescription = document.getElementById("news_description");
    const newsDate = document.getElementById("news_date");
    newsTitle.innerHTML = data.news[0].title;
    newsDescription.innerHTML = data.news[0].description;
    newsDate.innerHTML = data.news[0].date;
}


//JSON EX A
const mock = JSON.stringify(news);
const json = JSON.parse(mock);
//JSON EX A

const postNews = [news];
