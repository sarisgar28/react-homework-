import Search from "./Search";
import Weather from "./Weather";

// const EXAMPLE_ZIP_CODE = 37203;
/* const EXAMPLE_WEATHER_RESPONSE = 
{
  "base": "stations",
  "clouds": {
      "all": 90
  },
  "cod": 200,
  "coord": {
      "lat": 36.1504,
      "lon": -86.7916
  },
  "dt": 1610367250,
  "id": 0,
  "main": {
      "feels_like": 21.09,
      "humidity": 74,
      "pressure": 1026,
      "temp": 29.73,
      "temp_max": 30.2,
      "temp_min": 28.99
  },
  "name": "Nashville",
  "sys": {
      "country": "US",
      "id": 4609,
      "sunrise": 1610369886,
      "sunset": 1610405514,
      "type": 1
  },
  "timezone": -21600,
  "visibility": 10000,
  "weather": [
      {
          "description": "overcast clouds",
          "icon": "04n",
          "id": 804,
          "main": "Clouds"
      }
  ],
  "wind": {
      "deg": 10,
      "speed": 6.91
  }
} */

export default function HomePage() {
  return (
    <>
      <Search city={''} />
  
      <Weather   />
    </>
  );
}
