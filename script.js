const getWeatherData = async (city) => {
  const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9ed02fc399msh3b0fe1a993ea488p1a169ajsnbc3370edc155',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const searchCity = async () => {
  const city = document.getElementById('city-input').value;
    
  try {
      const data = await getWeatherData(city)
      showWeatherData(data)
    } catch (error){
      console.log(error)
    }
  }


const showWeatherData = (weatherData) => {
  document.getElementById('city-name').innerText = weatherData.name;
  document.getElementById('weather-type').innerText = weatherData.weather[0].main;
  document.getElementById('temp').innerText = weatherData.main.temp;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min;
  document.getElementById('max-temp').innerText = weatherData.main.temp_max;
  
}

