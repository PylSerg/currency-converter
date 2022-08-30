import { useState, useEffect } from "react";
import { USD, EUR, updateQuotes } from "../../js/quotes";
import styles from "./Header.module.css";

function Header() {
	const [currencyLeft, setCurrencyLeft] = useState({ value: "", currency: "USD", focus: false });
	const [currencyRight, setCurrencyRight] = useState({ value: "", currency: "UAH", focus: false });
	const [timeUpdate, setTimeUpdate] = useState();

	useEffect(() => {
		updateQuotes();
		messageUpdate();
	}, []);

	setInterval(() => {
		updateQuotes();
		messageUpdate();
	}, 60000);

	useEffect(() => {
		if (currencyLeft.focus) convertRightValue(currencyLeft.value);
		if (currencyRight.focus) convertLeftValue(currencyRight.value);
	}, [currencyLeft.currency, currencyRight.currency]);

	function convertRightValue(currValue) {
		if (currencyLeft.currency === "USD" && currencyRight.currency === "UAH") {
			setCurrencyRight({ ...currencyRight, value: (currValue * USD).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "UAH") {
			setCurrencyRight({ ...currencyRight, value: (currValue * EUR).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "USD") {
			setCurrencyRight({ ...currencyRight, value: (currValue / USD).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "EUR") {
			setCurrencyRight({ ...currencyRight, value: (currValue / EUR).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "USD" && currencyRight.currency === "EUR") {
			setCurrencyRight({ ...currencyRight, value: ((currValue * USD) / EUR).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "USD") {
			setCurrencyRight({ ...currencyRight, value: ((currValue * EUR) / USD).toFixed(2), focus: false });
			return;
		}

		setCurrencyRight({ ...currencyRight, value: currValue, focus: false });
	}

	function convertLeftValue(currValue) {
		if (currencyLeft.currency === "USD" && currencyRight.currency === "UAH") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue / USD).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "UAH") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue / EUR).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "USD") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue * USD).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "EUR") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue * EUR).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "USD" && currencyRight.currency === "EUR") {
			setCurrencyLeft({ ...currencyLeft, value: ((currValue / USD) * EUR).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "USD") {
			setCurrencyLeft({ ...currencyLeft, value: ((currValue / EUR) * USD).toFixed(2), focus: false });
			return;
		}

		setCurrencyLeft({ ...currencyLeft, value: currValue, focus: false });
	}

	function changeLeftValue(e) {
		setCurrencyLeft({ ...currencyLeft, value: e.currentTarget.value, focus: true });
		convertRightValue(e.currentTarget.value);
	}

	function changeRightValue(e) {
		setCurrencyRight({ ...currencyRight, value: e.currentTarget.value, focus: true });
		convertLeftValue(e.currentTarget.value);
	}

	function changeLeftCurrency(e) {
		setCurrencyLeft({ ...currencyLeft, currency: e.currentTarget.value });
	}

	function changeRightCurrency(e) {
		setCurrencyRight({ ...currencyRight, currency: e.currentTarget.value });
	}

	function messageUpdate() {
		let date = new Date();

		const minutes = mnts => {
			if (mnts < 10) {
				return "0" + mnts;
			}

			return mnts;
		};

		setTimeUpdate(`${date.getHours()}:${minutes(date.getMinutes())}`);
	}

	return (
		<div className={styles.container}>
			<input className={styles.inputs} type="number" value={currencyLeft.value} onChange={changeLeftValue} />
			<select className={styles.selects} value={currencyLeft.currency} onChange={changeLeftCurrency}>
				<option value="UAH">UAH</option>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
			</select>

			{(currencyLeft.focus || (!currencyLeft.focus && !currencyRight.focus)) && <span className={styles.arrow}>&#10230;</span>}
			{currencyRight.focus && <span className={styles.arrow}>&#10229;</span>}

			<input className={styles.inputs} type="number" value={currencyRight.value} onChange={changeRightValue} />
			<select className={styles.selects} value={currencyRight.currency} onChange={changeRightCurrency}>
				<option value="UAH">UAH</option>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
			</select>

			<div className={styles.lastUpdate} title="Last update">
				&#8635; {timeUpdate}
			</div>
		</div>
	);
}

export default Header;
