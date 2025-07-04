import React from "react";
import './DaySchedule.css';

const DayScheduleUI = () => {
	return (
		<div className="schedule-container">
			<div className="header">
				<h1>SCHEDULE</h1>
				<div className="add-icon">+</div>
			</div>

			<div className="date-nav">
				<div className="date-item">
					<div className="day">THU</div>
					<div className="date">25</div>
				</div>
				<div className="date-item active">
					<div className="day">FRI</div>
					<div className="date">26</div>
				</div>
				<div className="date-item">
					<div className="day">SAT</div>
					<div className="date">27</div>
				</div>
				<div className="date-item">
					<div className="day">SUN</div>
					<div className="date">28</div>
				</div>
				<div className="date-item">
					<div className="day">MON</div>
					<div className="date">29</div>
				</div>
				<div className="date-item">
					<div className="day">TUE</div>
					<div className="date">30</div>
				</div>
				<div className="date-item">
					<div className="day">WED</div>
					<div className="date">31</div>
				</div>
			</div>

			<div className="section">
				<div className="item">
					<div className="time-dot green"></div>
					<div className="item-content">
						<div className="item-time">05:30am</div>
						<div className="item-title">Morning Mobility</div>
						<div className="item-description">
							Dynamic stretches and activation
						</div>
					</div>
					<div className="repeat-badge">Daily</div>
					<div className="habit-actions">
						<button className="action-btn edit-btn">Edit</button>
						<button className="action-btn delete-btn">Delete</button>
					</div>
				</div>

				<div className="item">
					<div className="time-dot green"></div>
					<div className="item-content">
						<div className="item-time">06:00am</div>
						<div className="item-title">Pre-workout Nutrition</div>
						<div className="item-description">
							Protein shake and supplements
						</div>
					</div>
					<div className="repeat-badge">Daily</div>
					<div className="habit-actions">
						<button className="action-btn edit-btn">Edit</button>
						<button className="action-btn delete-btn">Delete</button>
					</div>
				</div>

				<div className="item">
					<div className="time-dot blue"></div>
					<div className="item-content">
						<div className="item-time">06:30am</div>
						<div className="item-title">Strength Training</div>
						<div className="item-description">Upper body focus session</div>
					</div>
					<div className="item-duration">90min</div>
				</div>

				<div className="item">
					<div className="time-dot green"></div>
					<div className="item-content">
						<div className="item-time">08:15am</div>
						<div className="item-title">Post-workout Recovery</div>
						<div className="item-description">
							Shower, stretching, and breakfast
						</div>
					</div>
					<div className="item-duration">45min</div>
				</div>

				<div className="item">
					<div className="time-dot yellow"></div>
					<div className="item-content">
						<div className="item-time">09:00am</div>
						<div className="item-title">Daily Standup</div>
						<div className="item-description">
							Team sync and sprint planning
						</div>
					</div>
					<div className="item-duration">30min</div>
				</div>

				<div className="item">
					<div className="time-dot yellow"></div>
					<div className="item-content">
						<div className="item-time">09:30am</div>
						<div className="item-title">Deep Work - Feature Development</div>
						<div className="item-description">
							React components and API integration
						</div>
					</div>
					<div className="item-duration">2hr 30min</div>
				</div>

				<div className="item">
					<div className="time-dot green"></div>
					<div className="item-content">
						<div className="item-time">12:00pm</div>
						<div className="item-title">Healthy Lunch</div>
						<div className="item-description">High protein meal prep</div>
					</div>
					<div className="item-duration">30min</div>
				</div>

				<div className="item">
					<div className="time-dot blue"></div>
					<div className="item-content">
						<div className="item-time">12:30pm</div>
						<div className="item-title">Active Recovery Walk</div>
						<div className="item-description">Light movement and fresh air</div>
					</div>
					<div className="repeat-badge">Daily</div>
					<div className="habit-actions">
						<button className="action-btn edit-btn">Edit</button>
						<button className="action-btn delete-btn">Delete</button>
					</div>
				</div>

				<div className="item">
					<div className="time-dot yellow"></div>
					<div className="item-content">
						<div className="item-time">01:00pm</div>
						<div className="item-title">Code Review Session</div>
						<div className="item-description">
							PR reviews and technical discussions
						</div>
					</div>
					<div className="item-duration">1hr</div>
				</div>

				<div className="item">
					<div className="time-dot yellow"></div>
					<div className="item-content">
						<div className="item-time">02:00pm</div>
						<div className="item-title">Architecture Meeting</div>
						<div className="item-description">
							System design and database optimization
						</div>
					</div>
					<div className="item-duration">1hr 30min</div>
				</div>

				<div className="item">
					<div className="time-dot green"></div>
					<div className="item-content">
						<div className="item-time">03:30pm</div>
						<div className="item-title">Hydration Check</div>
						<div className="item-description">
							Track water intake and electrolytes
						</div>
					</div>
					<div className="repeat-badge">Daily</div>
					<div className="habit-actions">
						<button className="action-btn edit-btn">Edit</button>
						<button className="action-btn delete-btn">Delete</button>
					</div>
				</div>

				<div className="item">
					<div className="time-dot yellow"></div>
					<div className="item-content">
						<div className="item-time">03:45pm</div>
						<div className="item-title">Bug Fixes & Testing</div>
						<div className="item-description">Unit tests and debugging</div>
					</div>
					<div className="item-duration">2hr 15min</div>
				</div>

				<div className="item">
					<div className="time-dot blue"></div>
					<div className="item-content">
						<div className="item-time">06:00pm</div>
						<div className="item-title">Cardio Training</div>
						<div className="item-description">HIIT or steady-state running</div>
					</div>
					<div className="item-duration">45min</div>
				</div>

				<div className="item">
					<div className="time-dot green"></div>
					<div className="item-content">
						<div className="item-time">07:00pm</div>
						<div className="item-title">Post-workout Meal</div>
						<div className="item-description">
							Recovery nutrition and dinner
						</div>
					</div>
					<div className="item-duration">45min</div>
				</div>

				<div className="item">
					<div className="time-dot blue"></div>
					<div className="item-content">
						<div className="item-time">08:00pm</div>
						<div className="item-title">Tech Learning</div>
						<div className="item-description">
							New frameworks and industry trends
						</div>
					</div>
					<div className="repeat-badge">Daily</div>
					<div className="habit-actions">
						<button className="action-btn edit-btn">Edit</button>
						<button className="action-btn delete-btn">Delete</button>
					</div>
				</div>

				<div className="item">
					<div className="time-dot green"></div>
					<div className="item-content">
						<div className="item-time">09:00pm</div>
						<div className="item-title">Sleep Prep Routine</div>
						<div className="item-description">
							Meditation and recovery tracking
						</div>
					</div>
					<div className="repeat-badge">Daily</div>
					<div className="habit-actions">
						<button className="action-btn edit-btn">Edit</button>
						<button className="action-btn delete-btn">Delete</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DayScheduleUI;