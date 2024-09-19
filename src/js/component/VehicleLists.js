import React, { useState, useEffect } from "react";

export default function Vehicle() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://www.swapi.tech/api/vehicles")
            .then((res) => res.json())
            .then((data) => {
                setVehicles(data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching vehicles:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading vehicles...</p>
            ) : (
                <ul>
                    {vehicles.map((vehicle) => (
                        <li key={vehicle.uid}>{vehicle.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
