
import "../../styles/home.css";
import { Card } from "../component/card";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="d-flex flex-column w-100 mt-3 align-items-center">
				<h1>characters</h1>
				<div className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.characters.map((item, index) => {
						return (
							<Card item={item} index={index} key={index}category="characters" />
						)
					})}
				</div>
			</div>
			{/* TODO COPY THIS DIV 2 TIMES BELOW FOR PLANETS AND VEHICLES */}
		</div>
	);
}

