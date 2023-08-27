function attachEvents() {
  const weatherEnums = {
    Sunny: "&#x2600;", // ☀
    "Partly sunny": "&#x26C5;", // ⛅
    Overcast: "&#x2601;", // ☁
    Rain: "&#x2614;", // ☂
    Degrees: "&#176;", // °
  };

  const locationInput = document.getElementById("location");
  const divForecast = document.getElementById("forecast");
  const currentDiv = document.getElementById("current");
  const upcomingDiv = document.getElementById("upcoming");
  document.getElementById("submit").addEventListener("click", dispayWeather);

  async function dispayWeather() {
    try {
        const locations = await getWeather(
          "http://localhost:3030/jsonstore/forecaster/locations"
        );
        const location = locations.find((x) => x.name == locationInput.value);
        displayCurrentWeather(location.code);
        displayUpcomingWeather(location.code);
    } catch (err) {
        divForecast.innerHTML = "Error"
    }
  }

  async function displayCurrentWeather(code) {
    const weather = await getWeather(
      "http://localhost:3030/jsonstore/forecaster/today/",
      code
    );
    console.log(weather);
    const forecast = weather.forecast;
    const forecastsDiv = createElement("div", "forecasts");
    const symbolSpan = createElement(
      "span",
      "symbol",
      weatherEnums[forecast.condition]
    );
    symbolSpan.classList.add("condition");
    forecastsDiv.appendChild(symbolSpan);
    const conditionContainerSpan = createElement("span", "condition");
    forecastsDiv.appendChild(conditionContainerSpan);
    const nameSpan = createElement("span", "forecast-data", weather.name);
    const degreesSpan = createElement(
      "span",
      "forecast-data",
      `${forecast.low}${weatherEnums["Degrees"]}/${forecast.high}${weatherEnums["Degrees"]}`
    );
    const conditionSpan = createElement(
      "span",
      "forecast-data",
      forecast.condition
    );
    conditionContainerSpan.appendChild(nameSpan);
    conditionContainerSpan.appendChild(degreesSpan);
    conditionContainerSpan.appendChild(conditionSpan);
    currentDiv.appendChild(forecastsDiv);
    divForecast.style.display = "block";
  }
  async function displayUpcomingWeather(code) {
    const upcomingWeather = await getWeather(
      "http://localhost:3030/jsonstore/forecaster/upcoming/",
      code
    );
    const forecastDiv = createElement("div", "forecast-info");
    upcomingDiv.appendChild(forecastDiv);
    forecastDiv.replaceChildren(
      ...upcomingWeather.forecast.map(createWeatherCard)
    );
  }
  async function getWeather(url, code) {
    let fullUrl = url;
    if (code) {
      fullUrl = url + code;
    }
    const response = await fetch(fullUrl);
    const data = await response.json();
    return data;
  }

  function createElement(type, className, content) {
    const el = document.createElement(type);
    el.className = className;
    if (content) {
      el.innerHTML = content;
    }
    return el;
  }

  function createWeatherCard(cardInfo) {
    const spanContainer = createElement("span", "upcoming");
    const spanSymbol = createElement(
      "span",
      "symbol",
      weatherEnums[cardInfo.condition]
    );
    const spanDegrees = createElement(
      "span",
      "forecast-data",
      `${cardInfo.low}${weatherEnums["Degrees"]}/${cardInfo.high}${weatherEnums["Degrees"]}`
    );
    const spanCondition = createElement(
      "span",
      "forecast-data",
      cardInfo.condition
    );
    spanContainer.appendChild(spanSymbol);
    spanContainer.appendChild(spanDegrees);
    spanContainer.appendChild(spanCondition);
    return spanContainer;
  }
}

attachEvents();
