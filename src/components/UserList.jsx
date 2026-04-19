import React from "react";
import styles from "./UserList.module.css";
import Button from "./ui/Button";

const UserList = (props) => {
	return (
		<div className={styles.users}>
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.age}) years
						<Button onClick={() => props.onDelete(user.id)}>Delete</Button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
