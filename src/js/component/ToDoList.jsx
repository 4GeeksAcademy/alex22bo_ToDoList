import React, { useState } from "react";

export const ToDoList = () =>{
    const [inputValue, setInputValue] = useState
	const [all, setAll] = useState([]);
	
	// usar lo indicado localstorage

	return (
		<div className="container">
			<h2>To Do List</h2>
			<div>
				<ul>
					<li>
						<input type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setAll(all.concat([inputValue]))   
								setInputValue = (" ")}
						}} 
						placeholder="What do you need to do?"/>
					</li>
					{all.map ((item, index) =>(
						<li>
							{item} <i className="fas fa-trash-alt"
							onClick={() => setAll(all.filter((t, currentIndex) =>
							index != currentIndex))}>

							</i>
						</li>
					))}
				</ul>
				<div>
					{all.length} task
				</div>
			</div>
			
		</div>


	);

}