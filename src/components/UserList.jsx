import React from "react";
import styles from "./UserList.module.css";
import Button from "./ui/Button";
import Card from "./ui/Card";

const UserList = (props) => {
	return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.age}) years
						<Button onClick={() => props.onDelete(user.id)}>
							Delete
						</Button>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UserList;