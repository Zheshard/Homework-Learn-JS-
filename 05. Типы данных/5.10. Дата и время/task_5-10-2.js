// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

let date = new Date(2012, 0, 3);

function getWeekDay(date) {
	let day = date.getDay();

	switch (day) {
		case 0:
			return 'ВС';
			break;
		case 1:
			return 'ПН';
			break;
		case 2:
			return 'ВТ';
			break;
		case 3:
			return 'СР';
			break;
		case 4:
			return 'ЧТ';
			break;
		case 5:
			return 'ПТ';
			break;
		case 6:
			return 'СБ';
			break;
	}
}

alert(getWeekDay(date));