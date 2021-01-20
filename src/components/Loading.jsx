import styles from "../styles/Loading.module.css";
import Loader from "react-loader-spinner";

function Loading() {
	return (
		<div className={styles["header-container"]}>
			<Loader type="Oval" color="blue" height={"9vw"} width={"9vw"} />
		</div>
	);
}

export default Loading;
