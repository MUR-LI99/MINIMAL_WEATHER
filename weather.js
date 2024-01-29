// assigning variable

const form= document.querySelector('#form') 
const userlocation= document.querySelector('#userlocation')
const button= document.querySelector('#search')
const temperature = document.querySelector('.temperature')
const weatherdescription = document.querySelector('.weatherdescription')
const humidityper= document.querySelector('.humidityper')
const windspeed= document.querySelector('.windspeed')
let i=0;

// acions of search btn


form.addEventListener('submit',(e) =>{

e.preventDefault();
document.getElementById("weatherblockimg").style.transform = "translateY(0%)";
document.getElementById("weatherblockimg").style.transitionDuration= "0.5s";


    
const ApiKey='94a81f53ad25093df8aea9cd5e107834';
const city=document.querySelector('#form input').value;
console.log(city)

    if(city=='')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`).then(response =>response.json()).then(json=>{

      const weatherimg= document.querySelector('#weatherblock img');
      const temperature= document.querySelector('.temperature');
      const weatherdescription= document.querySelector('.weatherdescription');
      const humidityper= document.querySelector('.humidityper');
      const windspeed= document.querySelector('.windspeed');
      
      switch(json.weather[0].main){

        case 'Mist':
            weatherimg.src="foggy.gif"
            break;
            case 'Haze':
                weatherimg.src="foggy.gif"
                break;
                case 'Fog':
                    weatherimg.src="foggy.gif"
                    break;    
            case 'Clouds':
                weatherimg.src="clouds.gif"
                break; 
                case 'Cloudy':
                weatherimg.src="cloudy.gif"
                break; 
                case 'Rain':
                weatherimg.src="rain.gif"
                break;
                 case 'Snow':
                weatherimg.src="snow.gif"
                break;    
                case 'Storm':
                weatherimg.src="storm.gif"
                break;
                case 'clear':
                    weatherimg.src="sun.gif"
                break;
                

            default:
                weatherimg.src="sun.gif"
                break;
      }
      temperature.innerHTML=`${parseInt(json.main.temp)}<s style="text-decoration: none;">&deg;c</s>`;
      weatherdescription.innerHTML=`${json.weather[0].description}`;
      humidityper.innerHTML=`${parseInt(json.main.humidity)}<s style="text-decoration: none;">%</s>`
      windspeed.innerHTML=`${parseInt(json.wind.speed)}<s style="text-decoration: none;">Km/h</s>`

     button


    }) 

    
});