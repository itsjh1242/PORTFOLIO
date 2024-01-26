// Video
import DayClear from "../../assets/weatherPicker/day_clear.mp4";
import DayRain from "../../assets/weatherPicker/day_rain.mp4";
import NightClear from "../../assets/weatherPicker/night_clear.mp4";
import NightRain from "../../assets/weatherPicker/night_rain.mp4";

export default function Background(weather_id) {
  const date = new Date();
  const hour = date.getHours();
  const rain = [
    201, 200, 202, 210, 211, 212, 221, 230, 231, 232, 300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 600, 601,
    602, 611, 612, 615, 616, 620, 621, 622, 701, 711, 721, 731, 741, 751, 761, 762, 771, 781,
  ];

  const data = {
    day: hour >= 6 && hour < 18 ? "day" : "night",
    weather: weather_id in rain ? "rain" : "clear",
  };

  return data.day === "day" && data.weather === "clear"
    ? DayClear
    : data.day === "day" && data.weather === "rain"
    ? DayRain
    : data.day === "night" && data.weather === "clear"
    ? NightClear
    : data.day === "night" && data.weather === "rain"
    ? NightRain
    : DayClear;
}
