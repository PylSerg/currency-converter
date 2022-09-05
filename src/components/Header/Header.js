import { USD, EUR, GBP, EGP, XAU } from "../../js/quotes";
import styles from "./Header.module.css";

function Header() {
	return (
		<div className={styles.container}>
			USD: {USD} UAH <br />
			EUR: {EUR} UAH <br />
			GBP: {GBP} UAH <br />
			EGP: {EGP} UAH <br />
			XAU: {XAU} UAH <br />
		</div>
	);
}

export default Header;
