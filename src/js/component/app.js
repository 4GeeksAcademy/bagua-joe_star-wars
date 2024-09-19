import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Planet from "./components/Planet"; // Import Planet component
import Vehicle from "./components/Vehicle"; // Import Vehicle component

function App() {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://www.swapi.tech/api/people")
            .then((res) => res.json())
            .then((data) => {
                setPeople(data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching people:", error);
                setLoading(false);
            });
    }, []);

    return (
        <Router>
            <div>
                <Navbar />

                <Routes>
                    <Route 
                        path="/" 
                        element={<h1>Welcome to the Star Wars API</h1>} 
                    />
                    <Route 
                        path="/people" 
                        element={
                            loading ? (
                                <p>Loading people...</p>
                            ) : (
                                <ul>
                                    {people.map((person) => (
                                        <li key={person.uid}>{person.name}</li>
                                    ))}
                                </ul>
                            )
                        } 
                    />
                    <Route path="/planets" element={<Planet />} /> {/* Planet route */}
                    <Route path="/vehicles" element={<Vehicle />} /> {/* Vehicle route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
