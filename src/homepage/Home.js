"use client";
import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import SideNavbar from "../side-navbar/SideNavbar";
import Welcome from "../welcome-page/Welcome";	
import ViewHabits from "../habits/ViewHabits";
import DaySchedule from "../schedule/DaySchedule";

function Home() {
	return (
		<div>
			<MainConverse />
		</div>
	);
}

export const MainConverse = () => {
    const [isHomeRequested, setHomeRequest] = useState(false)
	const [isLeftExpanded, setIsLeftExpanded] = useState(false);
	const [showInitialPage, setShowInitialPage] = useState(false);

	const toggleLeftSidebar = () => {
		setIsLeftExpanded((prev) => !prev);
	};

	const handleLogout = () => {
		console.log("Login button clicked");
		setShowInitialPage(true);
	};

	if (showInitialPage) {
		return <Welcome />;
	}

	return (
		<div className="layout">
			{/* Left Navbar */}
			<div className="left-navbar">
				<SideNavbar setHomeRequest={setHomeRequest} />
			</div>

			<div className="dynamicPageHolder">
				{/* Center Area */}
				<div className="pane center">
					<div className="no-chat-selected">
						{isHomeRequested && <ViewHabits />}
						{!isHomeRequested && <h3>Select All Habits to view your habits and schedule </h3>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
