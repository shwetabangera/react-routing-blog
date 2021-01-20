import { Link } from "react-router-dom";
import HeaderLogo from "../images/bestblog.png";
import styles from "../styles/Header.module.css";

function Header() {
	return (
		<div className={styles["header-container"]}>
			<img
				className={styles["header-logo"]}
				src={HeaderLogo}
				alt="Header Icon"
			/>
			<ul>
				<Link className={styles["nav-link"]} to="/blogs">
					<li className={styles["nav-item"]}> Home</li>
				</Link>
			</ul>
			<hr></hr>
		</div>
	);
}

export default Header;
