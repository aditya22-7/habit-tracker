import React, { useState } from "react";
import './ViewHabits.css';
import { Calendar, X } from "lucide-react";
import { create } from "zustand";
import DaySchedule from "../schedule/DaySchedule";

// Zustand store for habits
const useHabitsStore = create((set, get) => ({
	habits: {
		Morning: [
			{
				name: "Wake Up Stretch",
				repeat: "Daily",
				startDate: "2025-02-01",
				habitDescription: "Loosen up the body for a fresh start",
			},
			{
				name: "Drink Warm Water",
				repeat: "Daily",
				startDate: "2025-02-01",
				habitDescription: "Hydrate first thing in the morning",
			},
			{
				name: "Sunlight Exposure",
				repeat: "Weekly",
				startDate: "2025-02-01",
				habitDescription: "Spend time outdoors for Vitamin D",
			},
			{
				name: "Journal Thoughts",
				repeat: "Daily",
				startDate: "2025-02-01",
				habitDescription: "Clear the mind and focus intentions",
			},
			{
				name: "5-Minute Meditation",
				repeat: "Monthly",
				startDate: "2025-02-01",
				habitDescription: "Reconnect with calm and clarity",
			},
		],
		Afternoon: [
			{
				name: "Midday Walk",
				repeat: "Daily",
				startDate: "2025-02-01",
				habitDescription: "Take a break and refresh the mind",
			},
			{
				name: "Check Calendar",
				repeat: "Weekly",
				startDate: "2025-02-01",
				habitDescription: "Stay ahead on meetings and plans",
			},
		],
		Evening: [
			{
				name: "Reflect on Wins",
				repeat: "Daily",
				startDate: "2025-02-01",
				habitDescription: "Celebrate small successes",
			},
			{
				name: "Prepare Outfit",
				repeat: "Daily",
				startDate: "2025-02-01",
				habitDescription: "Choose clothes for tomorrow",
			},
			{
				name: "Inbox Zero",
				repeat: "Daily",
				startDate: "2025-02-01",
				habitDescription: "Clear emails and tasks",
			},
		],
		Night: [
			{
				name: "Brush & Floss",
				repeat: "Daily",
				startDate: "2025-02-01",
				habitDescription: "Night hygiene routine",
			},
			{
				name: "Bedtime Affirmations",
				repeat: "Daily",
				startDate: "2025-02-01",
				habitDescription: "End the day with positive thoughts",
			},
		],
	},

	addHabit: (timeOfDay, habit) => {
		const newHabit = { ...habit };
		set((state) => ({
			habits: {
				...state.habits,
				[timeOfDay]: [...state.habits[timeOfDay], newHabit],
			},
		}));
	},

	updateHabit: (oldTimeOfDay, newTimeOfDay, index, updatedHabit) => {
		set((state) => {
			const newHabits = { ...state.habits };
			if (oldTimeOfDay !== newTimeOfDay) {
				newHabits[oldTimeOfDay] = newHabits[oldTimeOfDay].filter(
					(_, i) => i !== index
				);
				newHabits[newTimeOfDay] = [...newHabits[newTimeOfDay], updatedHabit];
			} else {
				newHabits[newTimeOfDay][index] = updatedHabit;
			}
			return { habits: newHabits };
		});
	},

	deleteHabit: (timeOfDay, index) => {
		set((state) => ({
			habits: {
				...state.habits,
				[timeOfDay]: state.habits[timeOfDay].filter((_, i) => i !== index),
			},
		}));
	},
}));

// Zustand store for modal state
const useModalStore = create((set) => ({
	showModal: false,
	showDatePicker: false,
	editingHabit: null,
	formData: {
		name: "",
		timeOfDay: "Morning",
		repeat: "Daily",
		startDate: new Date().toISOString().split("T")[0],
		habitDescription: "",
	},

	openModal: () => set({ showModal: true }),
	closeModal: () =>
		set({
			showModal: false,
			editingHabit: null,
			formData: {
				name: "",
				timeOfDay: "Morning",
				repeat: "Daily",
				startDate: new Date().toISOString().split("T")[0],
				habitDescription: "",
			},
		}),

	setEditingHabit: (habit) => set({ editingHabit: habit }),
	updateFormData: (field, value) =>
		set((state) => ({
			formData: { ...state.formData, [field]: value },
		})),
	setFormData: (data) => set({ formData: data }),
	toggleDatePicker: () =>
		set((state) => ({ showDatePicker: !state.showDatePicker })),
	closeDatePicker: () => set({ showDatePicker: false }),
}));

// Action Buttons Component
const ActionButtons = ({ timeOfDay, index, habit, onEdit, onDelete }) => {
	return (
		<div className="action-buttons">
			<button
				className="edit-btn"
				onClick={() => onEdit(timeOfDay, index, habit)}>
				Edit
			</button>
			<button className="delete-btn" onClick={() => onDelete(timeOfDay, index)}>
				Delete
			</button>
		</div>
	);
};

// Habits Table Component
const HabitsTable = ({ habits, timeOfDay, onEdit, onDelete }) => {
	return (
		<div className="table-container">
			<table className="habits-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Repeat</th>
						<th>Start Date</th>
						<th>Habit Description</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{habits.map((habit, index) => (
						<tr key={index}>
							<td>{habit.name}</td>
							<td>{habit.repeat}</td>
							<td>{habit.startDate}</td>
							<td>{habit.habitDescription}</td>
							<td>
								<ActionButtons
									timeOfDay={timeOfDay}
									index={index}
									habit={habit}
									onEdit={onEdit}
									onDelete={onDelete}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

// Time Section Component
const TimeSection = ({ timeOfDay, habits, onEdit, onDelete }) => {
	return (
		<div className="time-section">
			<h2 className="section-heading">{timeOfDay}</h2>
			<HabitsTable
				habits={habits}
				timeOfDay={timeOfDay}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
		</div>
	);
};

// Form Field Component
const FormField = ({
	label,
	type = "text",
	name,
	value,
	onChange,
	placeholder,
	options,
	rows,
}) => {
	const renderInput = () => {
		switch (type) {
			case "select":
				return (
					<select name={name} value={value} onChange={onChange}>
						{options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				);
			case "textarea":
				return (
					<textarea
						name={name}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						rows={rows || 3}
					/>
				);
			default:
				return (
					<input
						type={type}
						name={name}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						readOnly={type === "readonly"}
					/>
				);
		}
	};

	return (
		<div className="form-group">
			<label>{label}</label>
			{renderInput()}
		</div>
	);
};

// Date Picker Component
const DatePicker = ({ selectedDate, onDateChange, onClose }) => {
	const generateCalendar = () => {
		const today = new Date();
		const year = today.getFullYear();
		const month = today.getMonth();
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startDate = new Date(firstDay);
		startDate.setDate(startDate.getDate() - firstDay.getDay());

		const days = [];
		const current = new Date(startDate);

		while (current <= lastDay || current.getDay() !== 0) {
			days.push(new Date(current));
			current.setDate(current.getDate() + 1);
		}

		return days;
	};

	const formatDate = (date) => {
		return date.toISOString().split("T")[0];
	};

	return (
		<div className="date-picker">
			<div className="date-picker-header">
				<span>July 2025</span>
			</div>
			<div className="date-picker-grid">
				<div className="date-picker-day-header">Su</div>
				<div className="date-picker-day-header">Mo</div>
				<div className="date-picker-day-header">Tu</div>
				<div className="date-picker-day-header">We</div>
				<div className="date-picker-day-header">Th</div>
				<div className="date-picker-day-header">Fr</div>
				<div className="date-picker-day-header">Sa</div>

				{generateCalendar().map((date, index) => (
					<button
						key={index}
						className={`date-picker-day ${
							date.getMonth() !== new Date().getMonth() ? "other-month" : ""
						} ${formatDate(date) === selectedDate ? "selected" : ""}`}
						onClick={() => onDateChange(formatDate(date))}>
						{date.getDate()}
					</button>
				))}
			</div>
		</div>
	);
};

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<div className="modal-header">
					<h3>{title}</h3>
					<button className="close-btn" onClick={onClose}>
						<X size={20} />
					</button>
				</div>
				{children}
			</div>
		</div>
	);
};

// Habit Form Component
const HabitForm = ({
	formData,
	onInputChange,
	onSave,
	onCancel,
	isEditing,
}) => {
	const { showDatePicker, toggleDatePicker, closeDatePicker } = useModalStore();

	const handleDateChange = (date) => {
		onInputChange({ target: { name: "startDate", value: date } });
		closeDatePicker();
	};

	const timeOfDayOptions = [
		{ value: "Morning", label: "Morning" },
		{ value: "Afternoon", label: "Afternoon" },
		{ value: "Evening", label: "Evening" },
		{ value: "Night", label: "Night" },
	];

	const repeatOptions = [
		{ value: "Daily", label: "Daily" },
		{ value: "Weekly", label: "Weekly" },
		{ value: "Monthly", label: "Monthly" },
	];

	return (
		<>
			<div className="modal-body">
				<FormField
					label="NAME"
					name="name"
					value={formData.name}
					onChange={onInputChange}
					placeholder="Enter habit name"
				/>

				<div className="form-row">
					<FormField
						label="TIME OF DAY"
						type="select"
						name="timeOfDay"
						value={formData.timeOfDay}
						onChange={onInputChange}
						options={timeOfDayOptions}
					/>

					<FormField
						label="REPEAT"
						type="select"
						name="repeat"
						value={formData.repeat}
						onChange={onInputChange}
						options={repeatOptions}
					/>
				</div>

				<div className="form-group">
					<label>START DATE</label>
					<div className="date-input-container">
						<input type="text" value={formData.startDate} readOnly />
						<button
							type="button"
							className="date-picker-btn"
							onClick={toggleDatePicker}>
							<Calendar size={16} />
						</button>
					</div>

					{showDatePicker && (
						<DatePicker
							selectedDate={formData.startDate}
							onDateChange={handleDateChange}
							onClose={closeDatePicker}
						/>
					)}
				</div>

				<FormField
					label="HABIT DESCRIPTION"
					type="textarea"
					name="habitDescription"
					value={formData.habitDescription}
					onChange={onInputChange}
					placeholder="Enter habit description"
					rows={3}
				/>
			</div>

			<div className="modal-footer">
				<button className="cancel-btn" onClick={onCancel}>
					Cancel
				</button>
				<button className="save-btn" onClick={onSave}>
					{isEditing ? "Update" : "Save"}
				</button>
			</div>
		</>
	);
};

// Main ViewHabits Component
const ViewHabits = () => {
	const { habits, addHabit, updateHabit, deleteHabit } = useHabitsStore();
	const {
		showModal,
		editingHabit,
		formData,
		openModal,
		closeModal,
		setEditingHabit,
		updateFormData,
		setFormData,
	} = useModalStore();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		updateFormData(name, value);
	};

	const handleSave = () => {
		if (!formData.name.trim()) return;

		if (editingHabit) {
			const updatedHabit = {
				...editingHabit.habit,
				name: formData.name,
				repeat: formData.repeat,
				startDate: formData.startDate,
				habitDescription: formData.habitDescription,
			};

			updateHabit(
				editingHabit.timeOfDay,
				formData.timeOfDay,
				editingHabit.index,
				updatedHabit
			);
		} else {
			const newHabit = {
				name: formData.name,
				repeat: formData.repeat,
				startDate: formData.startDate,
				habitDescription: formData.habitDescription,
			};

			addHabit(formData.timeOfDay, newHabit);
		}

		closeModal();
	};

	const handleEdit = (timeOfDay, index, habit) => {
		setEditingHabit({ timeOfDay, index, habit });
		setFormData({
			name: habit.name,
			timeOfDay: timeOfDay,
			repeat: habit.repeat,
			startDate: habit.startDate,
			habitDescription: habit.habitDescription,
		});
		openModal();
	};

	const handleDelete = (timeOfDay, index) => {
		deleteHabit(timeOfDay, index);
	};

	const handleNewHabit = () => {
		setEditingHabit(null);
		openModal();
	};

	return (
		<div className="habit-tracker-container">
			<div className="main-content">
				<div className="top-section">
					<button className="new-habit-btn" onClick={handleNewHabit}>
						+ New Habit
					</button>
					<div className="filters-space"></div>
				</div>

				<div className="time-sections">
					{Object.entries(habits).map(([timeOfDay, sectionHabits]) => (
						<TimeSection
							key={timeOfDay}
							timeOfDay={timeOfDay}
							habits={sectionHabits}
							onEdit={handleEdit}
							onDelete={handleDelete}
						/>
					))}
				</div>
			</div>

			<div className="schedule-holder">
				<DaySchedule/>
			</div>

			<Modal
				isOpen={showModal}
				onClose={closeModal}
				title={editingHabit ? "Edit Habit" : "New Habit"}>
				<HabitForm
					formData={formData}
					onInputChange={handleInputChange}
					onSave={handleSave}
					onCancel={closeModal}
					isEditing={!!editingHabit}
				/>
			</Modal>
		</div>
	);
};

export default ViewHabits;
