// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );
let date = new Date(2023, 1, 24, 20, 38);

function formatDate(date) {
	let currentDate = new Date();
	let diffDate = currentDate - date;
	console.log(diffDate / 1000);
	if (diffDate < 0) return 'время еще не наступило';
	if (diffDate < 1000) return 'прямо сейчас';
	if (diffDate < 1000 * 60) return `${Math.floor(diffDate / 1000)} сек. назад`;
	if (diffDate < 1000 * 60 * 60) return `${Math.floor(diffDate / 1000 / 60)} мин. назад`;

	date = [
		'0' + date.getDate(),
		'0' + (date.getMonth() + 1),
		'' + date.getFullYear(),
		'0' + date.getHours(),
		'0' + date.getMinutes()
	].map(component => component.slice(-2));

	return date.slice(0, 3).join('.') + ' ' + date.slice(3).join(':');
}

console.log(formatDate(new Date(new Date - 86400 * 1000)));