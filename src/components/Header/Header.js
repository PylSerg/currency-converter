import { useState, useEffect } from "react";

function Header() {
	const [currencyLeft, setCurrencyLeft] = useState({ value: 1, currency: "USD" });
	const [currencyRight, setCurrencyRight] = useState({ value: 0, currency: "UAH" });

	useEffect(() => convertRightValue(currencyLeft.value), [currencyLeft.currency, currencyRight.currency]);

	function convertRightValue(currValue) {
		if (currencyLeft.currency === "USD" && currencyRight.currency === "UAH") {
			setCurrencyRight({ ...currencyRight, value: (currValue * 40).toFixed(2) });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "UAH") {
			setCurrencyRight({ ...currencyRight, value: (currValue * 42).toFixed(2) });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "USD") {
			setCurrencyRight({ ...currencyRight, value: (currValue / 40).toFixed(2) });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "EUR") {
			setCurrencyRight({ ...currencyRight, value: (currValue / 42).toFixed(2) });
			return;
		}

		if (currencyLeft.currency === "USD" && currencyRight.currency === "EUR") {
			setCurrencyRight({ ...currencyRight, value: ((currValue * 40) / 42).toFixed(2) });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "USD") {
			setCurrencyRight({ ...currencyRight, value: ((currValue * 42) / 40).toFixed(2) });
			return;
		}

		setCurrencyRight({ ...currencyRight, value: currValue });
	}

	function convertLeftValue(currValue) {
		if (currencyLeft.currency === "USD" && currencyRight.currency === "UAH") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue / 40).toFixed(2) });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "UAH") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue / 42).toFixed(2) });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "USD") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue * 40).toFixed(2) });
			return;
		}

		if (currencyLeft.currency === "UAH" && currencyRight.currency === "EUR") {
			setCurrencyLeft({ ...currencyLeft, value: (currValue * 42).toFixed(2) });
			return;
		}

		if (currencyLeft.currency === "USD" && currencyRight.currency === "EUR") {
			setCurrencyLeft({ ...currencyLeft, value: ((currValue / 40) * 42).toFixed(2) });
			return;
		}

		if (currencyLeft.currency === "EUR" && currencyRight.currency === "USD") {
			setCurrencyLeft({ ...currencyLeft, value: ((currValue / 42) * 40).toFixed(2) });
			return;
		}

		setCurrencyLeft({ ...currencyLeft, value: currValue });
	}

	function changeLeftValue(e) {
		setCurrencyLeft({ ...currencyLeft, value: e.currentTarget.value });
		convertRightValue(e.currentTarget.value);
	}

	function changeRightValue(e) {
		setCurrencyRight({ ...currencyRight, value: e.currentTarget.value });
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
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="UAH">UAH</option>
			</select>
		</div>
	);
}

export default Header;
