import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import SWL from "../../img/SWL.png"


export default function Navbar() {
    const { store, actions } = useContext(Context)
    return (
        <nav className="navbar bg-primary px-5 mb-4" data-bs-theme="dark">
            <Link to="/">
                <img src={SWL} alt="https://pngimg.com/image/28278" style={{ height: "100px", marginTop: "-10px", marginBottom: "-10px" }} />
            </Link>

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites [{store.favorites.length}]
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    {store.favorites.length > 0 ? (
                        store.favorites.map((fav, index) => (
                            <li className="dropdown-item d-flex justify-content-between" key={index}>
                                <Link to={"/details/" + fav.category + "/" + fav.index}>
                                    {fav.name}
                                </Link>
                                <span onClick={() => actions.deleteFavorite(index)}>
                                    <i className="fa-solid fa-trash ms-2"></i>
                                </span>
                            </li>

                        ))
                    ) : (
                        <li className="dropdown-item text-center">(empty)</li>
                    )}

                </ul>
            </div>
        </nav>

    );
}

