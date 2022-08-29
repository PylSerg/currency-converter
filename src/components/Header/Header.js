import { useState, useEffect } from "react";

function Header() {
	const [currencyLeft, setCurrencyLeft] = useState({ value: 1, currency: "USD", focus: true });
	const [currencyRight, setCurrencyRight] = useState({ value: 100, currency: "UAH", focus: false });

	useEffect(() => {
		if (currencyLeft.focus) convertRightValue(currencyLeft.value);
		if (currencyRight.focus) convertLeftValue(currencyRight.value);
	}, [currencyLeft.currency, currencyRight.currency]);

	function convertRightValue(currValue) {
		if (currencyLeft.currency === "USD" && currencyRight.currency === "UAH") {
			setCurrencyRight({ ...currencyRight, value: (currValue * 40).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "UAH") {
			setCurrencyRight({ ...currencyRight, value: (currValue * 42).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "USD") {
			setCurrencyRight({ ...currencyRight, value: (currValue / 40).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "EUR") {
			setCurrencyRight({ ...currencyRight, value: (currValue / 42).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "USD" && currencyRight.currency === "EUR") {
			setCurrencyRight({ ...currencyRight, value: ((currValue * 40) / 42).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "USD") {
			setCurrencyRight({ ...currencyRight, value: ((currValue * 42) / 40).toFixed(2), focus: false });
			return;
		}

		setCurrencyRight({ ...currencyRight, value: currValue, focus: false });
	}

	function convertLeftValue(currValue) {
		if (currencyLeft.currency === "USD" && currencyRight.currency === "UAH") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue / 40).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "UAH") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue / 42).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "USD") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue * 40).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "EUR") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue * 42).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "USD" && currencyRight.currency === "EUR") {
			setCurrencyLeft({ ...currencyLeft, value: ((currValue / 40) * 42).toFixed(2), focus: false });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "USD") {
			setCurrencyLeft({ ...currencyLeft, value: ((currValue / 42) * 40).toFixed(2), focus: false });
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

	return (
		<div>
			<input type="number" value={currencyLeft.value} onChange={changeLeftValue} />
			<select value={currencyLeft.currency} onChange={changeLeftCurrency}>
				<option value="UAH">UAH</option>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
			</select>
			=
			<input type="number" value={currencyRight.value} onChange={changeRightValue} />
			<select value={currencyRight.currency} onChange={changeRightCurrency}>
				<option value="UAH">UAH</option>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
			</select>
		</div>
	);
}

export default Header;
