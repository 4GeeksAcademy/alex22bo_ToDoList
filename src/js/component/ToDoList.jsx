import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";


export const ToDoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState([]); // lista de tareas

	// Se añade una función para incluir tareas

	const addTask = (task) => {
		if (task.trim() !== "") {
			setTasks([...tasks, task]) //añadir la tarea al array
			setInputValue("");
		}
	};

	// Se incluye una función para eliminar una tarea por indice

	const deleteTask = (index) => {
		const updateTasks = tasks.filter((t, i) => i !== index);
		setTasks(updateTasks); //actualizar el estado del array
	};

	// investigar y usar lo indicado de localstorage

	return (
		<div className="container my-5">
			<div className="card">
				<div className="card-body">
					<h2>To-Do List</h2>
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="What needs to be done?"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							//key press está obsoleto, se actualiza por onKeyDown
							onKeyDown={(e) => {
								if (e.key === "Enter") addTask(inputValue)
							}}
						/>
					</div>
					<ul className="list-group">
						{tasks.map((task, index) => (
							<li
								key={index}
								className="list-group-item d-flex justify-content-between align-items-center"
							>{task}
								<button className="delete-btn"
									onClick={() => deleteTask(index)}>
									<FaTimes />
								</button>
							</li>
						))}
					</ul>


					<div className="tex-center mt-3">
						{tasks.length} task{tasks.length !== 1 ? "s" : ""}
					</div>
				</div>
			</div>
		</div>
	);
};