const form = document.querySelector(".top-banner form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
});

const apiKey = '76337d09db3747c69a94b2fa9aa0b534';
const inputVal = input.value;
const url = 'http://api.openweathermap.org/data/2.5/forecast?id=${inputVal}&appid=${apiKey}'

fetch(url)
    .then(response => response.json())
    .then(data => {
        // do stuff with the data
    })
    .catch(() => {
        msg.textContent = "Please search for a valid city";
    });

// Build the list items
const {main, name, sys, weather } = data;
const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
    weather[0]["icon"]
}.svg`;

const li = document.createElement("li");
li.classList.add("city");
const markup = ` 
<h2 class="city-name" data-name="${name},${sys.country}"> 
<span>${name}</span> 
<sup>${sys.country}</sup> 
</h2> 
<div class="city-temp">${Math.round(main.temp)}<sup>°C</sup> 
</div> 
<figure> 
<img class="city-icon" src=${icon} alt=${weather[0]["main"]}> 
<figcaption>${weather[0]["description"]}</figcaption> 
</figure> 
`;
li.innerHTML = markup
list.appendChild(li)

msg.textContent = "";
form.reset();
input.focus();