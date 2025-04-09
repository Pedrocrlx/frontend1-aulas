const apiURL = "https://67f5687a913986b16fa4788c.mockapi.io/api/";

export const getNews = async () => {
    const response = await fetch(apiURL + "news");
    const data = await response.json();
    console.log(data);
    return data;
};

export const createNews = async (post) => {
    const response = await fetch(apiURL + "news", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    });
    const data = await response.json();
    return data;
};

export const deleteNews = async (id) => {
    const response = await fetch(apiURL + "news/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};
