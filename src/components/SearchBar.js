import React from "react";
import { useState } from "react";

export default function SearchBar(props) {
    const [enteredCity, setEnteredCity] = useState("");

    const cityInputHandler = (event) => {
        setEnteredCity(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.setCityName(enteredCity);
        setEnteredCity("");
    };

    return (
        <div className="mt-6 flex flex-col justify-center items-center ">
            <div className="text-gray-200 mb-4 ">
                Enter a city below to find your local weather.
            </div>
            <form onSubmit={submitHandler}>
                <input
                    className="rounded-md w-96 px-1 h-8 text-black"
                    type="text"
                    onChange={cityInputHandler}
                    value={enteredCity}
                />
                <button
                    type="submit"
                    value="Submit"
                    className="btn mt-5 lg:mt-0 ml-3"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
