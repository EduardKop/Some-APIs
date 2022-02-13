let city = document.querySelector('.target');
let btn = document.querySelector('.btn');
let icon = ''
function iconFunc() {  
  if (icon=='Partly cloudy'){
    return `Переменная облачность ☁️`
  }else if (icon=='Cloudy') {
    return `Облачно ☁️☁️`
  }else if (icon=='Mist') {
    return `Туман 🌫`
  }else if (icon=='Overcast') {
    return `Пасмурная погода ☁️`
  }else if (icon=='Blizzard') {
    return `Метель 🌪`
  }else if (icon=='Light snow') {
    return `Слабый снег ☃️`
  }else if (icon=='Blowing snow') {
    return `Сильный снегопад 🌨`
  }else if (icon=='Patchy snow possible') {
    return `Мокрый снег 🌧❄`
  }else if (icon=='Patchy heavy snow') {
    return `Сильный снегопад 🌨`
  }else if (icon=='Sunny') {
    return `Солнечно ☀️`
  }else if (icon=='Patchy moderate snow') {
    return `Умеренный снегопад ☃️`
  }else  {
    return `Другое☁️`
  }
}
btn.addEventListener('click', ()=>{
    (async () => {
        try {
            const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key={YOUR KEY}&q=${city.value}&days=3&aqi=no&alerts=no`);
    
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
    
            const data = await res.json();
            console.log(`
    Weather Status 
    Сьогодні 😎
    Дата та Час 🗓 ${data.location.localtime}
    Місто 💩${data.location.name}💩
    Температура ${data.current.temp_c} градусів
    Відчувається як  ${data.current.feelslike_c}
    ${iconFunc(icon = data.forecast.forecastday[0].day.condition.text)}
    
    Завтра 
    ${data.forecast.forecastday[1].date}  ${data.forecast.forecastday[1].day.avgtemp_c}
    ${iconFunc(icon = data.forecast.forecastday[1].day.condition.text)}
    
    Післязавтра 
    ${data.forecast.forecastday[2].date}  ${data.forecast.forecastday[2].day.avgtemp_c}
    ${iconFunc(icon = data.forecast.forecastday[2].day.condition.text)}`);
    
        } catch (err) {
            console.error(err);
        }
    })();
})


