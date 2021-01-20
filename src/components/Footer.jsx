import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

function Footer() {
	return (
		<div className={styles["footer-container"]}>
			<h1 className={styles["copyright"]}>
				Copyright &copy; 2020 All Rights Reserved
			</h1>
			<div className={styles["icons-container"]}>
				<FaTwitterSquare className={styles["icon"]} size="6vh" color="black" />
				<FaGithubSquare className={styles["icon"]} size="6vh" color="black" />
				<FaLinkedin className={styles["icon"]} size="6vh" color="black" />
			</div>
		</div>
	);
}

export default Footer;
