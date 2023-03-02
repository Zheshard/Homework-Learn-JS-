// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

let a = 555;
let b = 12;

function getMin(a, b) {
	let min = a < b ? a : b;
	return min;
}

console.log(getMin(a, b));