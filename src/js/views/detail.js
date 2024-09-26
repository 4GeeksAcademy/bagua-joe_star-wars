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

    const GUIDE_URL = "https://starwars-visualguide.com/assets/img/"

    const getImageUrl = () => {
        if (imgErr) {
            return pic;
        } else {
            return GUIDE_URL + category + "/" + (parseInt(params.id) + 1) + ".jpg";
        }
            
        
    }
    const handleImgErr = () => {
        setImgErr(true);
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center p-2">
                        <img src={getImageUrl()} onError={handleImgErr} className="img-fluid rounded"></img>
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
                            <div className="d-flex flex-row">
                                <u className="w-50 flex-row pe-2 text-end">
                                    {
                                        category == "characters" ? "Eye color:" :
                                            category == "planets" ? "Climate:" :
                                                "Length:"

                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.eye_color :
                                            category == "planets" ? planet.climate :
                                                vehicle.length
                                    }
                                </p>
                            </div>
                            <div className="d-flex flex-row">
                                <u className="w-50 flex-row pe-2 text-end">
                                    {
                                        category == "characters" ? "Height:" :
                                            category == "planets" ? "Diameter:" :
                                                "Edited:"

                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.height :
                                            category == "planets" ? planet.diameter :
                                                vehicle.edited
                                    }
                                </p>
                            </div>
                            <div className="d-flex flex-row">
                                <u className="w-50 flex-row pe-2 text-end">
                                    {
                                        category == "characters" ? "Hair Color:" :
                                            category == "planets" ? "Orbital period:" :
                                                "Manufacturer:"

                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.hair_color :
                                            category == "planets" ? planet.orbital_period :
                                                vehicle.manufacturer
                                    }
                                </p>
                            </div>
                            <div className="d-flex flex-row">
                                <u className="w-50 flex-row pe-2 text-end">
                                    {
                                        category == "characters" ? "Skin Color:" :
                                            category == "planets" ? "Films:" :
                                                "Model:"

                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.skin_color :
                                            category == "planets" ? planet.films :
                                                vehicle.model
                                    }
                                </p>
                            </div>
                            <div className="d-flex flex-row">
                                <u className="w-50 flex-row pe-2 text-end">
                                    {
                                        category == "characters" ? "Mass:" :
                                            category == "planets" ? "Gravity:" :
                                                "Passengers:"

                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.mass :
                                            category == "planets" ? planet.gravity :
                                                vehicle.passengers
                                    }
                                </p>
                            </div>
                            <div className="d-flex flex-row">
                                <u className="w-50 flex-row pe-2 text-end">
                                    {
                                        category == "characters" ? "Created:" :
                                            category == "planets" ? "Population:" :
                                                "Vehicle class:"

                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.created :
                                            category == "planets" ? planet.population :
                                                vehicle.vehicle_class
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}