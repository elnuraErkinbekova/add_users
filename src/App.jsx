import { useState, Fragment } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
	const [users, setUsers] = useState([]);

	const addUserHandler = (userInfo) => {
		setUsers((prevUsers) => {
			return [userInfo, ...prevUsers];
		});
	};

	return (
		<>
			<AddUser onAdd={addUserHandler} />
			<UserList users={users} />
		</>
	);
}

export default App;
