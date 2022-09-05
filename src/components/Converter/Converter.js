import styles from "./Converter.module.css";

function Converter({ currencyLeft, currencyRight, timeUpdate, changeLeftValue, changeLeftCurrency, changeRightValue, changeRightCurrency, changeFocus }) {
	return (
		<div className={styles.container}>
			<input className={styles.inputs} type="number" value={currencyLeft.value} onChange={changeLeftValue} />
			<select className={styles.selects} value={currencyLeft.currency} onChange={changeLeftCurrency}>
				<option value="UAH">UAH</option>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
			</select>

			{(currencyLeft.focus || (!currencyLeft.focus && !currencyRight.focus)) && (
				<span className={styles.arrow} onClick={changeFocus}>
					&#10230;
				</span>
			)}
			{currencyRight.focus && (
				<span className={styles.arrow} onClick={changeFocus}>
					&#10229;
				</span>
			)}

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

export default Converter;
