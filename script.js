let container_div = document.createElement("div");
container_div.className = "container";
document.body.appendChild(container_div);

let row_div = document.createElement("div");
row_div.className = "row";
container_div.appendChild(row_div);

async function getWeather(element) {
    let {lat,lng} = element.currentTarget
    console.log(lat,lng);
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b577c926650073562350c784637a6a47`,{method: 'GET'})
    let data = await res.json();
    alert(data.weather[0].main);
    
}

function Create_Cards(data){

    data.forEach(element => {


        let col_div = document.createElement("div");
        col_div.className = "col-lg-4 col-sm-12";
        row_div.appendChild(col_div);

        let card_div = document.createElement("div");
        card_div.className = "card";
        col_div.appendChild(card_div);

        let cardheader_div = document.createElement("div");
        cardheader_div.className = "card-header";
        cardheader_div.innerText = element.name.common;
        card_div.appendChild(cardheader_div);

        let cardimg = document.createElement("img");
        cardimg.className = "card-img";
        cardimg.src = element.flags.png;
        card_div.appendChild(cardimg);

        let cardbody_div = document.createElement("div");
        cardbody_div.className = "card-body";
        cardbody_div.lat = element.latlng[0];
        cardbody_div.lng = element.latlng[1];
        cardbody_div.addEventListener('click',getWeather,false);
        cardbody_div.innerHTML = `
            <p>Capital: ${element.capital}</p>
            <p>Region: ${element.region}</p>
            <p>Country Code: ${element.altSpellings[0]}</p>
            <button>Click for Weather</button>
        `;
        card_div.appendChild(cardbody_div);        
    });

}

fetch('https://restcountries.com/v3.1/all',{method: 'GET'})
.then(req=>req.json())
.then(data=>Create_Cards(data))
.catch(error=>console.log(error))
