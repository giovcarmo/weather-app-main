import { days } from './index.js'

const screen = {
    weatherData: document.getElementById('content'),
    renderContent() {
        this.weatherData.innerHTML = `
                                    <div class="left-side">
                                        <div class="time">
                                            <div class="tuesday">
                                                <h3>Berlin, Germany</h3>
                                                <p>Tuesday, Aug 5, 2025</p>
                                            </div>
                                            <div class="celsius">
                                                <img src="src/images/icon-sunny.webp" alt="Sunny">
                                                <h2><i>20º</i></h2>
                                            </div>
                                        </div>

                                        <div class="time-conditions">
                                            <div class="time-button">
                                                <p class="conditions">Feels Like</p>
                                                <span class="valor">18º</span>
                                            </div>

                                            <div class="time-button">
                                                <p class="conditions">Humidity</p>
                                                <span class="valor">46%</span>
                                            </div>
                                            <div class="time-button">
                                                <p class="conditions">Wind</p>
                                                <span class="valor">14 km/h</span>
                                            </div>
                                            <div class="time-button">
                                                <p class="conditions">Precipitation</p>
                                                <span class="valor">0 mm</span>
                                            </div>
                                        </div>

                                        <h4>Daily forecast</h4>
                                        <div class="daily-forecast">
                                            <div class="tue day">
                                                <h5>Tue</h5>
                                                <img src="./src/images/icon-rain.webp" alt="Icon rain">
                                                <div class="condit">
                                                    <p>20º</p>
                                                    <p>14º</p>
                                                </div>
                                            </div>
                                            <div class="wed day">
                                                <h5>Wed</h5>
                                                <img src="./src/images/icon-drizzle.webp" alt="Icon Drizzle">
                                                <div class="condit">
                                                    <p>21º</p>
                                                    <p>15º</p>
                                                </div>
                                            </div>
                                            <div class="thu day">
                                                <h5>Thu</h5>
                                                <img src="./src/images/icon-sunny.webp" alt="Icon Sunny">
                                                <div class="condit">
                                                    <p>24º</p>
                                                    <p>14º</p>
                                                </div>
                                            </div>
                                            <div class="fri day">
                                                <h5>Fri</h5>
                                                <img src="./src/images/icon-partly-cloudy.webp" alt="Icon Cloudy">
                                                <div class="condit">
                                                    <p>25º</p>
                                                    <p>13º</p>
                                                </div>
                                            </div>
                                            <div class="sat day">
                                                <h5>Sat</h5>
                                                <img src="./src/images/icon-storm.webp" alt="Icon Snow">
                                                <div class="condit">
                                                    <p>21º</p>
                                                    <p>15º</p>
                                                </div>
                                            </div>
                                            <div class="sun day">
                                                <h5>Sun</h5>
                                                <img src="./src/images/icon-snow.webp" alt="Icon Snow">
                                                <div class="condit">
                                                    <p>25º</p>
                                                    <p>16º</p>
                                                </div>
                                            </div>
                                            <div class="mon day">
                                                <h5>Mon</h5>
                                                <img src="./src/images/icon-fog.webp" alt="Icon Fog">
                                                <div class="condit">
                                                    <p>24º</p>
                                                    <p>15º</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="right-side">
                                        <div class="hourly-forecast">
                                            <div class="select-day">
                                                <h5 class="hourly-f">Hourly forecast</h5>
                                                <div class="btn-change-day">
                                                    <a href="">Tuesday</a>
                                                    <img src="./src/images/icon-dropdown.svg" alt="Dropdown icon">
                                                </div>
                                                ${days}
                                            </div>

                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-overcast.webp" alt="Icon overcast">
                                                    <p>3 PM</p>
                                                </div>
                                                <p>20º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-partly-cloudy.webp" alt="Partly cloudy">
                                                    <p>4 PM</p>
                                                </div>
                                                <p>20º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-sunny.webp" alt="Sunny">
                                                    <p>5 PM</p>
                                                </div>
                                                <p>20º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-overcast.webp" alt="Over cast">
                                                    <p>6 PM</p>
                                                </div>
                                                <p>19º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-snow.webp" alt="Snow">
                                                    <p>7 PM</p>
                                                </div>
                                                <p>18º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-fog.webp" alt="Fog">
                                                    <p>8 PM</p>
                                                </div>
                                                <p>18º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-snow.webp" alt="Snow">
                                                    <p>9 PM</p>
                                                </div>
                                                <p>17º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-overcast.webp" alt="Overcast">
                                                    <p>10 PM</p>
                                                </div>
                                                <p>17º</p>
                                            </div>
                                        </div>
                                    </div>
                                    `
    },
    renderContentImperial() {
        this.weatherData.innerHTML = `
                                    <div class="left-side">
                                        <div class="time">
                                            <div class="tuesday">
                                                <h3>Berlin, Germany</h3>
                                                <p>Tuesday, Aug 5, 2025</p>
                                            </div>
                                            <div class="celsius">
                                                <img src="src/images/icon-sunny.webp" alt="Sunny">
                                                <h2><i>68º</i></h2>
                                            </div>
                                        </div>

                                        <div class="time-conditions">
                                            <div class="time-button">
                                                <p class="conditions">Feels Like</p>
                                                <span class="valor">64º</span>
                                            </div>

                                            <div class="time-button">
                                                <p class="conditions">Humidity</p>
                                                <span class="valor">46%</span>
                                            </div>
                                            <div class="time-button">
                                                <p class="conditions">Wind</p>
                                                <span class="valor">9 mp/h</span>
                                            </div>
                                            <div class="time-button">
                                                <p class="conditions">Precipitation</p>
                                                <span class="valor">0 in</span>
                                            </div>
                                        </div>

                                        <h4>Daily forecast</h4>
                                        <div class="daily-forecast">
                                            <div class="tue day">
                                                <h5>Tue</h5>
                                                <img src="./src/images/icon-rain.webp" alt="Icon rain">
                                                <div class="condit">
                                                    <p>68º</p>
                                                    <p>57º</p>
                                                </div>
                                            </div>
                                            <div class="wed day">
                                                <h5>Wed</h5>
                                                <img src="./src/images/icon-drizzle.webp" alt="Icon Drizzle">
                                                <div class="condit">
                                                    <p>70º</p>
                                                    <p>59º</p>
                                                </div>
                                            </div>
                                            <div class="thu day">
                                                <h5>Thu</h5>
                                                <img src="./src/images/icon-sunny.webp" alt="Icon Sunny">
                                                <div class="condit">
                                                    <p>75º</p>
                                                    <p>57º</p>
                                                </div>
                                            </div>
                                            <div class="fri day">
                                                <h5>Fri</h5>
                                                <img src="./src/images/icon-partly-cloudy.webp" alt="Icon Cloudy">
                                                <div class="condit">
                                                    <p>77º</p>
                                                    <p>55º</p>
                                                </div>
                                            </div>
                                            <div class="sat day">
                                                <h5>Sat</h5>
                                                <img src="./src/images/icon-storm.webp" alt="Icon Snow">
                                                <div class="condit">
                                                    <p>70º</p>
                                                    <p>59º</p>
                                                </div>
                                            </div>
                                            <div class="sun day">
                                                <h5>Sun</h5>
                                                <img src="./src/images/icon-snow.webp" alt="Icon Snow">
                                                <div class="condit">
                                                    <p>77º</p>
                                                    <p>61º</p>
                                                </div>
                                            </div>
                                            <div class="mon day">
                                                <h5>Mon</h5>
                                                <img src="./src/images/icon-fog.webp" alt="Icon Fog">
                                                <div class="condit">
                                                    <p>75º</p>
                                                    <p>59º</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="right-side">
                                        <div class="hourly-forecast">
                                            <div class="select-day">
                                                <h5 class="hourly-f">Hourly forecast</h5>
                                                <div class="btn-change-day">
                                                    <a href="">Tuesday</a>
                                                    <img src="./src/images/icon-dropdown.svg" alt="Dropdown icon">
                                                </div>
                                                <ul>
                                                    <li>Monday</li>
                                                    <li>Tuesday</li>
                                                    <li>Wednesday</li>
                                                    <li>Thursday</li>
                                                    <li>Friday</li>
                                                    <li>Saturday</li>
                                                    <li>Sunday</li>
                                                </ul>
                                            </div>

                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-overcast.webp" alt="Icon overcast">
                                                    <p>3 PM</p>
                                                </div>
                                                <p>68º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-partly-cloudy.webp" alt="Partly cloudy">
                                                    <p>4 PM</p>
                                                </div>
                                                <p>68º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-sunny.webp" alt="Sunny">
                                                    <p>5 PM</p>
                                                </div>
                                                <p>68º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-overcast.webp" alt="Over cast">
                                                    <p>6 PM</p>
                                                </div>
                                                <p>66º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-snow.webp" alt="Snow">
                                                    <p>7 PM</p>
                                                </div>
                                                <p>66º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-fog.webp" alt="Fog">
                                                    <p>8 PM</p>
                                                </div>
                                                <p>64º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-snow.webp" alt="Snow">
                                                    <p>9 PM</p>
                                                </div>
                                                <p>63º</p>
                                            </div>
                                            <div class="tempo">
                                                <div class="tempo-img">
                                                    <img src="./src/images/icon-overcast.webp" alt="Overcast">
                                                    <p>10 PM</p>
                                                </div>
                                                <p>63º</p>
                                            </div>
                                        </div>
                                    </div>
                                    `
    },
    renderContentLoading() {
        this.weatherData.innerHTML = `
                                    <div class="left-side">
                                        <div class="time-loading">
                                            <div class="celsius-loading">
                                                <div class="loader-dot"></div>
                                                <div class="loader-dot"></div>
                                                <div class="loader-dot"></div>
                                            </div>
                                            <h2 class="loader-text">Loading...</h2>
                                        </div>

                                        <div class="time-conditions">
                                            <div class="time-button">
                                                <p class="conditions">Feels Like</p>
                                                <span class="valor">_</span>
                                            </div>

                                            <div class="time-button">
                                                <p class="conditions">Humidity</p>
                                                <span class="valor">_</span>
                                            </div>
                                            <div class="time-button">
                                                <p class="conditions">Wind</p>
                                                <span class="valor">_</span>
                                            </div>
                                            <div class="time-button">
                                                <p class="conditions">Precipitation</p>
                                                <span class="valor">_</span>
                                            </div>
                                        </div>

                                        <h4>Daily forecast</h4>
                                        <div class="daily-forecast">
                                            <div class="tue day">
                                            </div>
                                            <div class="wed day">
                                            </div>
                                            <div class="thu day">
                                            </div>
                                            <div class="fri day">
                                            </div>
                                            <div class="sat day">
                                            </div>
                                            <div class="sun day">
                                            </div>
                                            <div class="mon day">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="right-side">
                                        <div class="hourly-forecast">
                                            <div class="select-day">
                                                <h5 class="hourly-f">Hourly forecast</h5>
                                                <div class="btn-change-day">
                                                    <a href="">-</a>
                                                    <img src="./src/images/icon-dropdown.svg" alt="Dropdown icon">
                                                </div>
                                                <ul>
                                                </ul>
                                            </div>

                                            <div class="tempo">
                                            </div>
                                            <div class="tempo">
                                            </div>
                                            <div class="tempo">
                                            </div>
                                            <div class="tempo">
                                            </div>
                                            <div class="tempo">
                                            </div>
                                            <div class="tempo">
                                            </div>
                                            <div class="tempo">
                                            </div>
                                            <div class="tempo">
                                            </div>
                                        </div>
                                    </div>
                                    `
    },
    renderContentNull() {
        this.weatherData.innerHTML = `
                                    <div class="null">
                                        <h2 class="not-found">No search result found!</h2>
                                    </div>
                                    `
    }
}

export { screen }

