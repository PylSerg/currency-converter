import { USD, EUR, GBP, EGP, XAU } from "../../js/quotes";
import styles from "./Header.module.css";

function Header() {
	return (
		<ul className={styles.container}>
			<li className={styles.item}>
				<span className={styles.currency}> USD:</span>
				<span className={styles.quotation}> {USD} UAH </span>
			</li>
			<li className={styles.item}>
				<span className={styles.currency}> EUR:</span>
				<span className={styles.quotation}> {EUR} UAH </span>
			</li>
			<li className={styles.item}>
				<span className={styles.currency}> GBP:</span>
				<span className={styles.quotation}> {GBP} UAH </span>
			</li>
			<li className={styles.item}>
				<span className={styles.currency}> EGP:</span>
				<span className={styles.quotation}> {EGP} UAH </span>
			</li>
			<li className={styles.item}>
				<span className={styles.currency}> XAU:</span>
				<span className={styles.quotation}> {XAU} UAH </span>
			</li>
		</ul>
	);
}

export default Header;
