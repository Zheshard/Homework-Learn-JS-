// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
	let today = new Date();
	let secondsHavePassed = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
	let secondsInADay = 86400;
	return secondsInADay - secondsHavePassed;
}

console.log(getSecondsToTomorrow());