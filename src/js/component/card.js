import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";


export const Card = ({item, index, category}) => {
    const {store, actions} = useContext(Context);
    const GUIDE_URL = "https://starwars-visualguide.com/assets/img"

    const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.category === category)
    const handleFavorite = () => {
        const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.category === category)
        if (isFavorite) {
            const indexToDelete = store.favorites.findIndex(fav => fav.name === item.name && fav.category === category)
            if (indexToDelete !== -1) {
                actions.deleteFavorite(indexToDelete)
            }
        } else {
            actions.addFavorite({ name: item.name, index, category})
        }
    }
    return (
        <div className="card" style={{minWidth: "18rem"}}>
            <img src={`${GUIDE_URL}/${category}/${index+1}.jpg`} className="card-img-top" alt="N/A" />
                <div className="card-body p-3">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                        {
                            category == "characters" ? "Gender: " + item.gender :
                            category == "planets" ? "Population: " + item.population :
                            "Crew:" + item.crew
                        }
                    </p>
                    {/* TODO ADD TWO MORE P TAGS WITH DIFFERENT INFORMATION */}
                    <div className="d-flex justify-content-between mt-auto">
                        <Link to={"/details/" + category + "/" + index}>
                            <button type="button" className="btn btn-secondary">Learn more!</button>
                        </Link>
                        <button className="btn btn-outline-primary" type="button" onClick={handleFavorite}>
                        <i className={ `fa-heart ${isFavorite ? "fa-solid" : "fa-regular"}`}></i>
                        </button>
                    </div>
                </div>
        </div>
    )
}
