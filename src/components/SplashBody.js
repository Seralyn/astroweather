import WeatherInfoBlock from "./WeatherInfoBlock";

function SplashBody() {
    return ( 
        <div className="w-screen text-white bg-gray-700 text-center h-[400px] mt-24 flex flex-wrap items-center justify-center">
            
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