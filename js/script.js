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

async function fetchNews() {
    try {
        const response = await fetch("js/news.json");
        const data = await response.json();
        localStorage.getItem("news_title");
        localStorage.getItem("news_description");
        document.getElementById("date").textContent = data.news[0].date;
    } catch (error) {
        console.error(error);
    }
}
fetchNews();

//JA PASSAS POR LOCAL STORAGE, MAS AINDA NAO ESTA A SER MOSTRADO NO INDEX

//LINHA 33 E 34

const postNews = [news];
const postDriversStandings = [drivers_standings];
const postContructorsStandings = [constructors_standings];
