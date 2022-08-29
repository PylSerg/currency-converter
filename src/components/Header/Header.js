import { useState } from "react";

function Header() {
	const [currencyLeft, setCurrencyLeft] = useState({ value: 1, currency: "UAH" });
	const [currencyRight, setCurrencyRight] = useState({ value: 0, currency: "USD" });

	function changesRightCurr(e) {
		setCurrencyLeft({ ...currencyLeft, value: e.currentTarget.value });
		setCurrencyRight({ ...currencyRight, value: e.currentTarget.value * 40 });
	}

	function changesLeftCurr(e) {}

	return (
		<div>
			<input type="number" name="currency-left" value={currencyLeft.value} onChange={changesRightCurr} />
			<select name="currency-left">
				<option value="UAH" autoFocus>
					UAH
				</option>
				<option value="USD" disabled>
					USD
				</option>
				<option value="EUR">EUR</option>
			</select>
			=
			<input type="number" name="currency-right" value={currencyRight.value} onChange={changesLeftCurr} />
			<select name="currency-right">
				<option value="UAH" disabled>
					UAH
				</option>
				<option value="USD" autoFocus>
					USD
				</option>
				<option value="EUR">EUR</option>
			</select>
		</div>
	);
}

export default Header;
