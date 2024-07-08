


let cityTodayElement = document.querySelector('#cityToday')
let degreeTodayElement = document.querySelector('#degreeToday')


let degreeTomorrowElement = document.querySelector('#degree-number')




async function setWeatherToElement(cityName) {
  const apiUrl = `http://api.weatherapi.com/v1/search.json?key=a2f27bae9c594a798ae221634240507&q=${cityName}`;

  const response = await fetch(apiUrl);

  const data = await response.json();

  console.log(response);

  if (data == null) {
    console.log("null");
  }
  else {

    console.log(data[0]);

    cityTodayElement.innerHTML = data[0].name;
    degreeTodayElement.innerHTML = data[0].lat;

    degreeTomorrowElement.innerHTML = data[0].lat;
    
    
  }

}

let searchInput = document.querySelector('#search');

searchInput.addEventListener('keyup', function () {
  setWeatherToElement(searchInput.value);
})
