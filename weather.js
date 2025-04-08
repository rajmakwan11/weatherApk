// TAKING LOCATION 

const loc = localStorage.getItem("userLocation");
console.log(loc);

if (!loc) {
    console.log("No location found in localStorage.");
    //code later to display not found data
  
}

// DISPLAYING DATA BY FUNCTION 

function displayError(){
    let errorMsg = document.createElement("h1");
    errorMsg.innerHTML = "No Data Found, Check Entered Location";
    errorMsg.style.cssText = "font-size: 10rem;";
    errorMsg.style.color = `white`;

    const parent = document.getElementById("container").textContent= errorMsg.innerHTML;
    // parent.appendChild(errorMsg);

    // parent.appendChild(errorMsg);

    
}

function displayData(data){
    // display 
    const temp = document.getElementById("temp");
    const weather = document.getElementById("weather");
    const wind = document.getElementById("wind");
    const humidity = document.getElementById("humidity");
    const userLocation = document.getElementById("userLocation");

    userLocation.innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country} `

    temp.childNodes[0].nodeValue = data.current.temp_c;
    weather.textContent = data.current.condition.text;
    wind.textContent = `${data.current.wind_kph}KM/h`;
    humidity.textContent = `${data.current.wind_kph}%`;

    // DISPLAYING IMAGE ACCORDING TO THE DATA 

    const image = document.getElementById("weatherImage");

    if(data.current.condition.text=="Clear")
        image.src = `https://static.vecteezy.com/system/resources/previews/042/569/419/non_2x/cloud-and-moon-icons-weather-icons-suitable-for-apps-web-etc-free-png.png`;

    else if(data.current.condition.text=="Sunny")
        image.src = `https://cdn-icons-png.flaticon.com/512/5367/5367718.png`;
    
    else if(data.current.condition.text=="Overcast")
        image.src = `https://png.pngtree.com/png-clipart/20230914/ourmid/pngtree-dark-clouds-white-clouds-cartoon-illustrations-cartoon-weather-decoration-patterns-png-image_10026295.png`; 

    else if(data.current.condition.text=="Mist")
        image.src = `https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png`;
    
    else{
        image.src=`https://freepngimg.com/download/icon/rain/72580-ico-thunderstorm-rain-lightning-weather-icon.png`;
    }


    console.log(data);
}

const Promises = fetch(`https://api.weatherapi.com/v1/current.json?key=2c3ad667adc8465890f123601250804&q=${loc}&aqi=yes`);

Promises.then((response)=>{
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();

})

.then((data)=>{

    if(data.error){

        displayError();

    }
    else{

        displayData(data)

    }
})
.catch((erro)=>{
    displayError();
    console.log(`THE ERROR IS ${erro}`)
});



