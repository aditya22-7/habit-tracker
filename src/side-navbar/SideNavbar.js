"use client";
import React, { useState, useRef, useEffect } from "react";
import "./SideNavbar.css";
import ViewHabits from "../habits/ViewHabits";
import Welcome from "../welcome-page/Welcome";

function SideNavbar({ setHomeRequest }) {
	const [homeContents, setHomeContents] = useState(false);

	return (
		<>
			{/* Sidebar */}
			<div className={`sidebar show`}>
				<div className="sideNavBarTop">
					<button
						className="sideNavBarButton"
						onClick={() => {
							console.log("Home button clicked");
							setHomeRequest(true);
							setHomeContents(true);
						}}>
						All Habits
					</button>
					<button className="sideNavBarButton">My Schedule</button>
					<button className="sideNavBarButton">Targets</button>
					<button className="sideNavBarButton">Influencers</button>
					<button className="sideNavBarButton">Achievements</button>
					<button className="sideNavBarButton">Rewards</button>
					<button className="sideNavBarButton">Profile</button>
					<button
						className="logoutButton">
						Logout
					</button>
				</div>
				{/* <div className="sideNavBarBottom">
					<button className="logoutButton">Logout</button>
				</div> */}
			</div>

			{/* <div
				className={`${styles.InitialPage} ${
					isSidebarVisible ? styles.initialPageShrink : styles.initialPageExpand
				}`}>
				WELCOME TO FINANCE VERSE
			</div> */}
			{/* HOME PAGE */}

			{/* {homeContents && <ViewHabits />} */}
			{/* {homeContents && <HeaderNavbar />}
				{homeContents && <Dashboard />}
				{homeContents && <UserAssist />} */}
		</>
	);
}

export default SideNavbar;
