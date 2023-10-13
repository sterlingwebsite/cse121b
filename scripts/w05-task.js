/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement('article');
        const templeNameHeading = document.createElement('h3');
        templeNameHeading.textContent = temple.templeName;
        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.location;
        article.appendChild(templeNameHeading);
        article.appendChild(templeImage);
        templesElement.appendChild(article);
    });
};
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};
/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};
/* sortBy Function */
const sortBySelect = document.querySelector("#sortBy");
const alphabeticalOption = document.createElement("option");
alphabeticalOption.value = "alphabetical";
alphabeticalOption.textContent = "Alphabetical";
sortBySelect.appendChild(alphabeticalOption);
const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple) => {
            const year = temple.dedicated.match(/\d{4}/);
            return year && parseInt(year[0]) < 1950;
            }));
            break;
        case "alphabetical":
            displayTemples(temples.slice().sort((a, b) => {
                const templeA = a.templeName.toLowerCase();
                const templeB = b.templeName.toLowerCase();
                if (templeA < templeB) return -1;
                if (templeA > templeB) return 1;
                return 0;
            }));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
        }
  };
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });
getTemples();