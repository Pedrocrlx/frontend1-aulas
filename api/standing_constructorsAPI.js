const constructorURL = "https://ergast.com/api/f1/current/constructorStandings";

// Função para preencher a tabela
const constructorStandingsTable = async () => {
    try {
        const response = await fetch(constructorURL);
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const xmlText = await response.text(); // Lê a resposta como texto (XML)
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "application/xml");

        // Converte o XML para JSON
        const json = xmlToJson(xml);
        // Acessa os dados dos standings
        const constructorStandings = json.MRData.StandingsTable.StandingsList.ConstructorStanding;
        // Seleciona a tabela no HTML
        const tableBody = document.querySelector(".constructors-standings table");

        // Remove linhas existentes (se necessário)
        tableBody.innerHTML = `
            <tr>
                <th>Position</th>
                <th>Constructor</th>
                <th>Nacionality</th>
                <th>Points</th>
                <th>Wins</th>
            </tr>
        `;

        // Preenche a tabela com os dados da API
        constructorStandings.forEach((standing, index) => {
            const row = document.createElement("tr");
            if (index % 2 === 0) {
                row.className = "table_highlight";
            }
            row.innerHTML = `
                <td>${standing["@attributes"].position}</td>
                <td>${standing.Constructor.Name["#text"]}</td>
                <td>${standing.Constructor.Nationality["#text"]}</td>
                <td>${standing["@attributes"].points}</td>
                <td>${standing["@attributes"].wins}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Erro ao preencher a tabela:", error);
    }
};

// Função para converter XML para JSON
function xmlToJson(xml) {
    let obj = {};
    if (xml.nodeType === 1) { // Elemento
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (let j = 0; j < xml.attributes.length; j++) {
                const attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType === 3) { // Texto
        obj = xml.nodeValue;
    }

    // Processa os nós filhos
    if (xml.hasChildNodes()) {
        for (let i = 0; i < xml.childNodes.length; i++) {
            const item = xml.childNodes.item(i);
            const nodeName = item.nodeName;
            if (typeof obj[nodeName] === "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (!Array.isArray(obj[nodeName])) {
                    obj[nodeName] = [obj[nodeName]];
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
}

// Chama a função para preencher a tabela
constructorStandingsTable();