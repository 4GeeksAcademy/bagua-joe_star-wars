
import "../../styles/home.css";
import { Card } from "../component/card";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="d-flex flex-column w-100 mt-3 align-items-center">
				<h1>Characters</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.characters.map((item, index) => {
						return (
							<Card item={item} index={index} key={index}category="characters" />
						)
					})}
				</div>
			</div>
			<div className="d-flex flex-column w-100 mt-3 align-items-center">
				<h1>Planets</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.planets.map((item, index) => {
						return (
							<Card item={item} index={index} key={index}category="planets" />
						)
					})}
				</div>
			</div>
			<div className="d-flex flex-column w-100 mt-3 align-items-center">
				<h1>Vehicles</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.vehicles.map((item, index) => {
						return (
							<Card item={item} index={index} key={index}category="vehicles" />
						)
					})}
				</div>
			</div>
			
		</div>
	);
}

