// Car Array
const cars = [
	{
		make: 'BMW',
		model: 'X7',
		year: 2021,
		price: 28000,
		image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfvKIl10tLhu1XzWVo7puMLWFmdkAj5DOPEtEKZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74g37TNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYpi4Wh1DMztIVqeqVYDafaiojmztYRSJ3667aftxdTWgw1RSfWQlO%25%25VxdSeZsNEuzWQdjc0ka3aeZQ6KAneXRjcZwBLv5rx6Kc%252y5b4WwBKupC3PFe%252B3iELSIjup2XHN3Kv63iprJ8yYGwXHi4TPFB9%25rJHFlMIxou4TJIsDvyL3FlTv0YliyXIslGAtsbCrv0s9OfeFE4GA0ogSTqNF9OALUdlkkIogOybQ%257nvLUgChZu85GybUEqcaX89ChbNmKRIPoEqhk7BS6MLNmqn12MbDyk7m5VpKbYCn178ziBwtE5V1Pa7ZSfN8zVMR1zySkPazDxVBDdnMRaYWz2MQ5DxRteapxZ8YWxfjRi0cPteWS6xkQKMfjedwHbRBDS6jQ%25JNp2Ydw6ZuTlZptQ%25wc3lsqifZu%25KXsy8HSc3uBr0NCJdKX324AbMTQBrXpFOhslZ24riIpzsscC4bVgvrt3RmFCoub%25cXJaHWpBPh'
	},
	{
		make: 'BMW',
		model: 'M5',
		year: 2022,
		price: 25000,
		image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jsd10tLhu1XzWVo7puMLWFmdkAj5DOPHtFhZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gS8NNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYp%254Wh1DMztINweqVYDafaOPjmztYRSRg367aftxdTQ%25w1RSfWQlsy%25VxdSeZsbtuzWQdjc0kN3aeZQ6KoInXRjcZwBLnUrx6Kc%252yu84WwBKupC31Fe%252B3iEaEIjup2XH5Mmv63iprJ84KGwXHi4TPFo9%25rJHFlMaxou4TJIsDpLL3FlTv0YbDyXIslGAtyJCrv0s9OfwTE4GA0ogSxZNF9OALUdtmkIogOybAh5nvLUgChOYC5GybUEqgtb89ChbNmUfKPoEqhk7bI5MLNmqn1SSbDyk7m5Vd49YCn178zQZ8tE5V1PaZcMfN8zVMRcKlSkPazDxKrCdnMRaYWBjwQ5DxRte2vFZ8YWxfjpTCcPteWS6ilBKMfjedwHVHBDS6jQ%25dnt2Ydw6ZuQ5eptQ%25wc3Z8KifG%250hlXw8j7guGFe0Wf6BmKVZdNA'
	},
	{
		make: 'BMW',
		model: '5',
		year: 2021,
		price: 27000,
		image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf7t8l10tLhu1XzWVo7puMLWFmdkAj5DOPFtp8Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giZ5NF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVyqWh1DMztIVCeqVYDafHRAjmztYRSJdw67aftxdTlkw1RSfWQlUY%25VxdSeZs3EuzWQdjc0kN3aeZQ6KokgXRjcZwBLnWrx6Kc%252yu84WwBKupC31Fe%252B3iE2TIjup2XHNy6v63iprJ8yaGwXHi4TPFR9%25rJHFlMaxou4TJIsDRzL3FlTv0YiyyXIslGAt5VCrv0s9OfCTE4GA0ogSxZNF9OALUdnqkIogOybQ55nvLUgChZS15GybUEqcdx89ChbNmU2PPoEqhk7bSEMLNmqn1hdmDyk7m5VqQpYCn178zm9MtE5V1PaZlqfN8zVMRcvySkPazDxKBsdnMRaYWB4cQ5DxRte2FNZ8YWxfjpwucPteWS6i9vKMfjedwHsNBDS6jQ%25J0p2Ydw6ZuQhpptvwsbT365emO%25v4WsxtjKqc1QSE0'
	},
	{
		make: 'BMW',
		model: '6 Series GT',
		year: 2022,
		price: 40000,
		image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf7t8l10tLhu1XzWVo7puMLWFmdkAj5DOPEttKZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giALNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYF1hWh1DMzticZeqVYDafHS6jmztYRSJOM67aftxdT%25Ww1RSfWQlEC%25VxdSeZsN5uzWQdjc0kT3aeZQ6KoInXRjcZwBLnWrxL67aftxdIWgw1RSfWQv4V%25Vvxb7MPVYFGHWhX10UkNh5u2OVAbnkq83VEzOh5nmPXRRagq857MruZRUmP81D5PAxb7MPVY8vWWhX10UkNh5EWkVA6bHsLoAC1wvhJR0KiIFJGbRMABHvIT9hqxO21JdKX324AEtTQbBDS6jQ%25J0p2Ydw6ZuQWWptvwsbT365emO%25v4WsxtjKqc1QSE0'
	},
	{
		make: 'BMW',
		model: 'iX',
		year: 2022,
		price: 65000,
		image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfXGPb10tLhu1XzWVo7puMLWFmdkAj5DOP7tFkZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gijhNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVKwWh1DMztioCeqVYDafHL2jmztYRSFxy67aftxdIfMw1RSfWQorK%25VxdSeZLjtuzWQdjcyUh3aeZQ6KCvSXRjcZwBEpIrx6Kc%252Nr%254WwBKupkb8Fe%252B3inhOIjup2XH5D10UkNh5EWkVAbnkq8Ne3zOh5nmPklcagq857MjH0RUmP81D6BAxb7MPVYwfdWh1DMzt%25HAeqVYDafu4AjmztYRS3FZ67aftxdIicw1RSfWQovu%25VxdSeZ40GuzWQdjcFbX3aeZQ6KC2RXRjcZwBvgLrx6Kc%252yKe4WwBKupCouFe%252B3iKarIjup2XH5rcv63iprJ8OWGwgiEPyTpRBYnHZ0KEcw2FD4fXu1N'
	},
];

function avg(cars){ 
    let sum = 0; 
    for (let i = 0; i < cars.length; i++) { 
        sum += cars[i][price]; 
    } 
    return sum / cars.length; 
} 

// Car List
const carList = document.getElementById('car-list');
function displayCars(cars) {
	carList.innerHTML = '';
	cars.forEach((car) => {
		const carEl = document.createElement('div');
		carEl.classList.add('car');
		carEl.innerHTML = `
			<img src="${car.image}" alt="${car.make} ${car.model}">
			<h3>${car.make} ${car.model}</h3>
			<p>Year: ${car.year}</p>
			<p>Price: $${car.price}</p>
			<p>AVG: ${avg.cars}</p>
		`;
		carList.appendChild(carEl);
	});
}

// Initial Display
displayCars(cars);
document.write("<h5>Average Price: " + avg(cars) + "</h5>")







