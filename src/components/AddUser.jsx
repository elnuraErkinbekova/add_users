import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "./ui/Button";
import Card from "./ui/Card";
import ErrorModal from "./ui/ErrorModal";

const AddUser = (props) => {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");
	const [error, setError] = useState("");

	const userNameChangeHandler = (e) => {
		setUserName(e.target.value);
	};

	const userAgeChangeHandler = (e) => {
		setUserAge(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (userName.trim() === "") {
			setError({
				type: "Empty",
				message: "Your input is empty. Please fill the inputs",
			});
			return;
		}

		if (+userAge < 13) {
			setError({
				type: "Age restriction",
				message: "The age of user user must be above 13 years",
			});
			return;
		}

		props.onAdd({
			id: Math.random().toString(),
			name: userName,
			age: userAge,
		});

		setUserName("");
		setUserAge("");
	};

	const closeModal = () => {
		setError(null);
	};

	return (
		<>
			<Card className={styles.input}>
				<form onSubmit={submitHandler}>
					<label htmlFor="name">Username</label>
					<input
						value={userName}
						onChange={userNameChangeHandler}
						id="name"
						type="text"
					/>
					<label htmlFor="age">Age</label>
					<input
						value={userAge}
						onChange={userAgeChangeHandler}
						id="age"
						type="number"
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
			{error && (
				<ErrorModal
					error={error.type}
					message={error.message}
					onClose={closeModal}
				/>
			)}
		</>
	);
};

export default AddUser;

// function demo(params) {
//     return [], []
// }
