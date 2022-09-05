import { useState, useEffect } from "react";
import { USD, EUR, updateQuotes } from "../src/js/quotes";
import Header from "./components/Header/Header";
import Converter from "../src/components/Converter";

function App() {
	const [currencyLeft, setCurrencyLeft] = useState({ value: "", currency: "USD", focus: false });
	const [currencyRight, setCurrencyRight] = useState({ value: "", currency: "UAH", focus: false });
	const [timeUpdate, setTimeUpdate] = useState();

	useEffect(() => {
		updateQuotes();
		refreshTimeUpdate();
	}, []);

	setInterval(() => {
		updateQuotes();
		refreshTimeUpdate();
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

	function changeFocus() {
		setCurrencyLeft({ ...currencyLeft, focus: !currencyLeft.focus });
		setCurrencyRight({ ...currencyRight, focus: !currencyRight.focus });
	}

	function refreshTimeUpdate() {
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
		<>
			<Header />
			<Converter
				currencyLeft={currencyLeft}
				currencyRight={currencyRight}
				timeUpdate={timeUpdate}
				changeLeftValue={changeLeftValue}
				changeLeftCurrency={changeLeftCurrency}
				changeRightValue={changeRightValue}
				changeRightCurrency={changeRightCurrency}
				changeFocus={changeFocus}
			/>
		</>
	);
}

export default App;
