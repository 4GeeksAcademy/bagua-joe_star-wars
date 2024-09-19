import React, { useState, useEffect } from "react";

export default function Planet() {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://www.swapi.tech/api/planets")
            .then((res) => res.json())
            .then((data) => {
                setPlanets(data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching planets:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading planets...</p>
            ) : (
                <ul>
                    {planets.map((planet) => (
                        <li key={planet.uid}>{planet.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
