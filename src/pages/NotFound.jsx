import { Component } from "react";
import styles from "../styles/NotFound.module.css";
import { Link } from "react-router-dom";

class NotFound extends Component {
	render() {
		return (
			<div className={styles["not-found-container"]}>
				<img
					className={styles["not-found-image"]}
					src="https://www.artzstudio.com/wp-content/uploads/2020/05/404-error-not-found-page-lost-1024x788.png"
					alt="Page Not Found"
				/>
				<Link className={styles["back"]} to="/blogs">
					<button>Go Back</button>
				</Link>
			</div>
		);
	}
}

export default NotFound;
