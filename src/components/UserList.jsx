import React from "react";
import styles from "./UserList.module.css";

const UserList = (props) => {
	return (
		<div className={styles.users}>
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.age}) years
						<button onClick={() => props.onDelete(user.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
