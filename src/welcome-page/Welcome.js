"use client";
import React, { useState, useRef, useEffect } from "react";
import "./Welcome.css";
import Home from "../homepage/Home";

function Welcome() {
	const [showMainPage, setShowMainPage] = useState(false);
	console.log("showMainPage == ", showMainPage);
	const handleLogin = () => {
		console.log("Login button clicked");
		setShowMainPage(true);
	};

	if (showMainPage) {
		return <Home />;
	}
	return (
		<>
			<div className="welcome-card-container">
				<div className={`welcome-card`}>
					<h1 className="welcome-title">
						Welcome to <span className="app-name">Discover Self</span>
					</h1>
					<p className="welcome-subtitle">Discover the Super Human in YOU</p>
					<button className="login-button" onClick={handleLogin}>
						Login
					</button>
				</div>
			</div>
		</>
	);
}



export default Welcome;
