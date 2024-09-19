import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"


export const Card = ({item, index, category}) => {
    const {store, actions} = useContext(Context);
    const GUIDE_URL = "https://starwars-visualguide.com/assets/img"
    return (
        <div classname="card" style={{width: "18rem"}}>
            <img src={`${GUIDE_URL}/${category}/${index+1}.jpg`} classname="card-img-top" alt="N/A" />
                <div classname="card-body">
                    <h5 classname="card-title">{item.name}</h5>
                    <p classname="card-text">
                        {
                            category == "characters" ? "Gender: " + item.gender :
                            category == "planets" ? "Population: " + item.population :
                            "Crew:" + item.crew
                        }
                    </p>
                    {/* TODO ADD TWO MORE P TAGS WITH DIFFERENT INFORMATION */}
                    <a href="#" classname="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}
