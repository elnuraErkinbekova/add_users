import { useState, Fragment } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import ConfirmModal from "./components/ui/ConfirmModal";

function App() {
	const [users, setUsers] = useState([]);
	const [userToDelete, setUserToDelete] = useState(null);

	const addUserHandler = (userInfo) => {
		setUsers((prevUsers) => {
			return [userInfo, ...prevUsers];
		});
	};

	const deleteUserHandler = (id) => {
		setUserToDelete(id);
	};

	const confirmDeleteHandler = () => {
		setUsers((prevUsers) =>
			prevUsers.filter((user) => user.id !== userToDelete),
		);
		setUserToDelete(null);
	};

	const cancelDeleteHandler = () => {
		setUserToDelete(null);
	};

	return (
		<>
			<AddUser onAdd={addUserHandler} />

			<UserList users={users} onDelete={deleteUserHandler} />

			{userToDelete && (
				<ConfirmModal
					title="Deleting a user"
					message="Are you sure that you want to delete a user?"
					onConfirm={confirmDeleteHandler}
					onCancel={cancelDeleteHandler}
				/>
			)}
		</>
	);
}

export default App;
