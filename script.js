// task 1 --------------------

function getWeather() {
    const cityId = document.querySelector('#city').value;
}

document.querySelector('#city').onchange = getWeather;

const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "34357cc5446e93bcdbf31bbabb30b318"
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.out').innerHTML = Math.round(data.main.temp) + '&deg; C';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

function getWeather() {
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}

const cities = {
    524901: 'Moscow',
    565381: 'Domodedovo',
    702658: 'Luhansk',
    711369: 'Bryanka'
}
for (let key in cities) {
    let option = document.createElement('li');
    option.innerHTML = cities[key];
    option.value = key;
    document.querySelector('#city').append(option);
}