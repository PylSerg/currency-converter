let USD = 0;
let EUR = 0;

const updateQuotes = async () => {
	try {
		const response = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
		const quotes = await response.json();

		USD = await quotes.find(data => data.cc === "USD").rate;
		EUR = await quotes.find(data => data.cc === "EUR").rate;
	} catch (error) {
		console.log(error.message);
	}
};

export { USD, EUR, updateQuotes };