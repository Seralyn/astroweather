import axios from "axios";
import { useState } from 'react';


function WeatherInfoBlock(props) {

    const APIurl = "https://my.meteoblue.com/packages/basic-1h_basic-day_current_clouds-1h_clouds-day_sunmoon?apikey=5JiOrKtqP7ngm0Ap&lat=54.6892&lon=25.2798&asl=98&format=json&winddirection=3char&forecast_days=5&history_days=2";



    return ( 
        <div className="mx-10">
            <span className="text-3xl text-white">Category</span>
        </div>
     );
}

export default WeatherInfoBlock;