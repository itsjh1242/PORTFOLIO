import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdLocationOn, MdClose, MdWaterDrop, MdWindPower, MdCloudQueue, MdSunny, MdSunnySnowing } from "react-icons/md";

// Style
import * as S from "./Style";

function Main() {
  const API_KEY = process.env.REACT_APP_WEATHER_PICKER_API_KEY;

  const [weatherData, setWeatherData] = useState({
    city: "",
    main_weather: "",
    desc_weather: "",
    icon: "",
    temp: "",
    feels_like: "",
    temp_min: "",
    temp_max: "",
    humidity: "",
    wind_speed: "",
    clouds: "",
    sunrise: "",
    sunset: "",
  });

  // Modal
  const [handleModal, setHandleModal] = useState(false);

  // On Press Enter Key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getWeather(e.target.value);
    }
    console.log(weatherData);
  };

  // Time Stamp Convert
  const tsConverter = (ts) => {
    const date = new Date(ts * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();

    return hours + "시" + minutes.substr(-2) + "분";
  };

  const getWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric `);
      setWeatherData({
        city: response.data.name,
        main_weather: response.data.weather[0].main,
        desc_weather: response.data.weather[0].description,
        icon: response.data.weather[0].icon,

        temp: Math.round(response.data.main.temp),
        feels_like: Math.round(response.data.main.feels_like),
        temp_min: Math.round(response.data.main.temp_min),
        temp_max: Math.round(response.data.main.temp_max),
        humidity: response.data.main.humidity,

        wind_speed: response.data.wind.speed,

        clouds: response.data.clouds.all,
        sunrise: tsConverter(response.data.sys.sunrise),
        sunset: tsConverter(response.data.sys.sunset),
      });
      setHandleModal(true);
    } catch (error) {
      alert("잘못된 도시명입니다.");
    }
  };

  useEffect(() => {
    console.log("Modal Opened");
  }, [weatherData]);

  return (
    <>
      {handleModal ? <Modal setHandleModal={setHandleModal} {...weatherData} /> : null}
      <S.Frame>
        <S.Header>
          <p className="title">지금 여기 날씨는?</p>
          <p className="subtitle">전국 날씨를 한 눈에 확인하기</p>
        </S.Header>
        <S.Search>
          <input className="search" placeholder="검색" onKeyDown={(e) => handleKeyPress(e)} />
          <p className="icon">🔍</p>
        </S.Search>
      </S.Frame>
    </>
  );
}

function Modal(props) {
  const handleCloseModal = () => {
    props.setHandleModal(false);
  };

  return (
    <>
      <S.Blur />
      <S.ModalFrame>
        <S.ModalHeader>
          <div className="row">
            <p>{props.city}</p>
            <MdLocationOn size={64} />
          </div>
          <MdClose size={40} />
        </S.ModalHeader>
        <S.ModalDesc>
          <div className="row">
            <p>{props.main_weather}</p> • <p>{props.desc_weather}</p>
          </div>
        </S.ModalDesc>
        <S.MarginTop size={16} />
        <S.ModalBody>
          <div className="col">
            <p>현재온도</p>
            <p>{props.temp}°</p>
          </div>
          <div className="row">
            <div className="col">
              <p>최고기온</p>
              <p>{props.temp_max}°</p>
            </div>
            <div className="col">
              <p>최저기온</p>
              <p>{props.temp_min}°</p>
            </div>
            <div className="col">
              <p>체감온도</p>
              <p>{props.feels_like}°</p>
            </div>
          </div>
        </S.ModalBody>
        <S.ModalFooter>
          <div className="col">
            <p>습기</p>
            <MdWaterDrop size={36} />
            <p>{props.humidity}%</p>
          </div>
          <div className="col">
            <p>풍속</p>
            <MdWindPower size={36} />
            <p>{props.wind_speed}%</p>
          </div>
          <div className="col">
            <p>구름</p>
            <MdCloudQueue size={36} />
            <p>{props.clouds}%</p>
          </div>
          <div className="col">
            <p>일출</p>
            <MdSunny size={36} />
            <p>{props.sunrise}</p>
          </div>
          <div className="col">
            <p>일몰</p>
            <MdSunnySnowing size={36} />
            <p>{props.sunset}</p>
          </div>
        </S.ModalFooter>
      </S.ModalFrame>
    </>
  );
}

export default Main;
