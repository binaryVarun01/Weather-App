//API call=https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const API_KEY='01f47f4b84704818f6cdcbc73dddb4ce'
//const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const form=document.querySelector('form')
const search=document.querySelector('#search-box')
const weather=document.querySelector('#weather')

const getWeather= async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response= await fetch(url)
    const data=await response.json()
    console.log(data);
    return showWeather(data)
}

const showWeather=(data)=>{
    if(data.cod=="404") {
        weather.innerHTML="City Not Found..."
        return
    }
    weather.innerHTML=
    `<div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" height="75px">
    </div>
    <div>
        <h1>${data.main.temp}℃</h1>
        <h4>${data.weather[0].main}</h4>
    </div>`

}

form.addEventListener('submit',(event)=>{
    weather.innerHTML='Loading...'
    getWeather(search.value);
    event.preventDefault()
    search.value=''


})


