import axios from "axios";
import WeatherInfoBlock from "./WeatherInfoBlock";

function SplashBody() {

    // const APIurl = "https://my.meteoblue.com/packages/basic-1h_basic-day_current_clouds-1h_clouds-day_sunmoon?apikey=5JiOrKtqP7ngm0Ap&lat=54.6892&lon=25.2798&asl=98&format=json&winddirection=3char&forecast_days=5&history_days=2";

    // const baseURLAstro =
    //     "https://api.weatherapi.com/v1/astronomy.json?key=a19d19d5317a40198b762206222204&q=" +
    //     props.cityName;
    const [currentWeatherData, setcurrentWeatherData] = useState("");
    const VilniusAPIurl =
        "https://api.weatherapi.com/v1/astronomy.json?key=a19d19d5317a40198b762206222204&q=vilnius";

    const apiData (axios.get(VilniusAPIurl).then(resp)) => {setcurrentWeatherData(resp.data)};
    
        // if () {
    //     axios.get(VilniusAPIurl).then(resp) => {
    //         setcurrentWeatherData(resp.data);
    //     }
    // }

    return ( 
        <div className="w-screen text-white bg-gray-700 text-center h-[400px] mt-24 flex flex-wrap items-center justify-center">
            <div>
                {currentWeatherData && currentWeatherData.astronomy.astro.sunset}{" "}
            </div>
            <WeatherInfoBlock />
            <WeatherInfoBlock />
            <WeatherInfoBlock />
            <WeatherInfoBlock />
            <WeatherInfoBlock />
            <WeatherInfoBlock />
            <WeatherInfoBlock />
            <WeatherInfoBlock />
            <WeatherInfoBlock />
            <WeatherInfoBlock />
        </div>
     );
}

export default SplashBody;