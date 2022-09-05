import { useState, useEffect } from "react";
import { USD, EUR } from "../../js/quotes";
import styles from "./Header.module.css";

function Header() {
	return (
		<div className={styles.container}>
			USD: {USD} UAH <br />
			EUR: {EUR} UAH
		</div>
	);
}

export default Header;
