import React from 'react'

function WeatherInfo({ city }) {
    return (
        <li className="city_info">
            <h3 className="city_name">{city.name}, {city.sys.country}</h3>
            {city.weather.map(item => {
                return (
                    <div className="weather_info" key={item.id}>
                        <h3 className="main_weather">
                            {item.main}
                        </h3>
                        <p className="description">
                            {item.description}
                        </p>
                    </div>
                )
            })}
            <div className="min_temp">
                min temp :  &nbsp; {city.main.temp_min}
            </div>
            <div className="max_temp">
                max temp :  &nbsp; {city.main.temp_max}
            </div>
            <div className="location">
                location:  &nbsp; {city.coord.lon}, {city.coord.lat}
            </div>
        </li>
    )
}

export default WeatherInfo
