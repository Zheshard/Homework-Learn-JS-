// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

let string1 = 'background-color';
let string2 = "list-style-image";
let string3 = "-webkit-transition";

function camelize(str) {
	let arrStr = str.split('-');

	for (let i = 1; i < arrStr.length; i++) {
		arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1);
	}

	return arrStr.join('');
}

console.log(camelize(string1));
console.log(camelize(string2));
console.log(camelize(string3));