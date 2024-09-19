import React from "react";
import { Link } from "react-router-dom";

// 

export default function Navbar() {
    return (
        <nav class="navbar bg-primary" data-bs-theme="dark">
            <a className="navbar-brand" href="#">home</a>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </nav>

    );
}

