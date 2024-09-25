import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useLocation, useParams } from "react-router-dom";
import pic from "../../img/sw-nopic.jpg"


export const Details = ({ category }) => {
    const { store } = useContext(Context);
    const [imgErr, setImgErr] = useState(false);
    const params = useParams();
    const location = useLocation();

    useEffect(() => {
        setImgErr(false);
    }, [location])

    const character = store.characters.find((item, index) => index == params.id)
    const planet = store.planets.find((item, index) => index == params.id)
    const vehicle = store.vehicles.find((item, index) => index == params.id)

    const GUIDE_URL = "https://starwars-visualguide.com/assets/img"

    const getImageUrl = () => {
        if (imgErr) {
            return pic;
        } 
            return GUIDE_URL + category + "/" + (parseInt(params.id) + 1) + ".jpg";
        
    }


    return (
        <div className="d-flex justify-content-center">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={getImageUrl()} onError={() => setImgErr(true)} className="img-fluid"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title text-center">
                                <u>
                                    {
                                        category == "characters" ? character.name :
                                            category == "planets" ? planet.name :
                                                vehicle.name
                                    }
                                </u>
                            </h2>
                            <div className="d-flex flex-row">
                                <u className="w-50 flex-row pe-2 text-end">
                                    {
                                        category == "characters" ? "Birth year:" :
                                            category == "planets" ? "Terrain:" :
                                                "Crew:"

                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.birth_year :
                                            category == "planets" ? planet.terrain :
                                                vehicle.crew
                                    }
                                </p>
                            </div>
                            {/* TODO COPY 5 MORE TIMES FOR OTER DESCRIPTIONS(DIV) */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}