const search_bar = document.getElementById('search-bar');
const search_btn = document.getElementById('search-icon');
const mousom_pic =document.getElementById('mousam-pic');
const temprature = document.getElementById('temprature');
const mousam  = document.getElementById('mousam');
const humadity = document.getElementById('humadity');
const wind_speed = document.getElementById('wind-speed');
const wrong_lo = document.getElementById('err');
const wrong_hid = document.querySelector('.pic');


async function checkWeather(city){
    const api_key = "193d30ac629809c9c15e6e5df4495cb6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weathe_data = await fetch(`${url}`).then(response =>
        response.json());
    // console.log(weathe_data);
    if(weathe_data.cod === `404`){
        // wrong_loc.style.display ="flex";
        // wrong_lo.style.display ="flex";

        wrong_lo.style.display = "block"
        wrong_hid.style.display ="none";
        return;
    }
    temprature.innerHTML= `${Math.round(weathe_data.main.temp-273.15) }°C`;
    mousam.innerHTML = `${(weathe_data.weather[0].main)}`
    wind_speed.innerHTML =`${weathe_data.wind.speed}km/H`;
    humadity.innerHTML = `${weathe_data.main.humidity}%`
    console.log(weathe_data);
}
search_btn.addEventListener('click',()=>{
    checkWeather(search_bar.value);
});