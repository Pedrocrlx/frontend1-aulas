const news = {
    title: "",
    description: "",
    date: "03-04-25",
}
const drivers_standings = {
    driver: "",
    team: "",
    points: 0,
    wins: 0,
    podiums: 0,
}
const constructors_standings = {
    team: "",
    points: 0,
    wins: 0,
    podiums: 0,
}

//JSON EX A
console.log("----João EX ta aqui----");
const mock = JSON.stringify(news);
console.log(mock);
const json = JSON.parse(mock);
console.log(json.date);
console.log("----João EX ta aqui----");
//JSON EX A

document.addEventListener("DOMContentLoaded", function () {
    fetchNews();
});

async function fetchNews() {
    try {
        const response = await fetch("js/news.json");
        const data = await response.json();
        console.log(data.news[0].title);
        renderNews(data);
    } catch (error) {
        console.error(error);
    }
}

function renderNews(data) {
    const newsTitle = document.getElementById("news_title");
    newsTitle.innerHTML = data.news[0].title;
    
}

renderNews();

const postNews = [news];
const postDriversStandings = [drivers_standings];
const postContructorsStandings = [constructors_standings];
