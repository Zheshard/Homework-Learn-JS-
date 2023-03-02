// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// shuffle(arr);
// arr = [3, 2, 1]

// shuffle(arr);
// arr = [2, 1, 3]

// shuffle(arr);
// arr = [3, 1, 2]
// ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

let arr = [1, 2, 3];
// мое решение:
function shuffle(array) {
	array.sort(() => Math.random() - Math.random());
}

// правильное решение:
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));

		[array[i], array[j]] = [array[j], array[i]];
	}
}

shuffle(arr);

console.log(arr);

