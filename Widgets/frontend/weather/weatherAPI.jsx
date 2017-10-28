

// "http://api.openweathermap.org/data/2.5/weather?lat=37.754356&lon=-122.38992789999999&APPID=0aea87380d979ab8b4b6bdb3e81c0df7"

const weatherAPI = (lat, lon) => (
 `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=0aea87380d979ab8b4b6bdb3e81c0df7`
);

export default weatherAPI;
