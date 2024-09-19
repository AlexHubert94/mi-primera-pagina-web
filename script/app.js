// import {quotes} from 'quotes.js';   // No es necesario que se importe cuando quotes.js esta llamado en index.html

let quote = document.getElementById("quote");
let autor = document.getElementById("autor");
let button = document.getElementById("button");
let side_2 = document.getElementById("side-2");

let colorPastel = [ "#be3c72", "#88a7d0", "#afeeee", "#458282", "#eeafaf", "#F9B7FF", "#bc98f3", "#7ff9c7", "#5086c1", "#8f7193" ];

function numRandom(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

button.addEventListener("click", function (e) {
    let numberRandom = numRandom(0, quotes.length);
    quote.innerText = `"${quotes[numberRandom].text}"`;
    autor.innerText = `- ${quotes[numberRandom].autor} -`;
    side_2.style.backgroundColor = colorPastel[numberRandom];
    //side_2.style.opacity = 0.9;
});
