let USD = 0;
let EUR = 0;
let GBP = 0;
let EGP = 0;
let XAU = 0;

const updateQuotes = async () => {
	try {
		const response = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
		const quotes = await response.json();

		USD = await quotes.find(data => data.cc === "USD").rate.toFixed(2);
		EUR = await quotes.find(data => data.cc === "EUR").rate.toFixed(2);
		GBP = await quotes.find(data => data.cc === "GBP").rate.toFixed(2);
		EGP = await quotes.find(data => data.cc === "EGP").rate.toFixed(2);
		XAU = await quotes.find(data => data.cc === "XAU").rate.toFixed(2);
	} catch (error) {
		console.log(error.message);
	}
};

export { USD, EUR, GBP, EGP, XAU, updateQuotes };
