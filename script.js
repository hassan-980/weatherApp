const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c89e476e4mshe16ead1e3c7923fp1298a6jsn86a583c137ed',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle' , options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));