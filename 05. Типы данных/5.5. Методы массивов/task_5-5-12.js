// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O

let strings = ["кришна", 'er', "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O", ":-O"
];

function unique(arr) {
	let newArr = [];
	arr.sort();
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i]);
		while (arr[i] == arr[i + 1]) {
			i++;
		}
	}
	console.log(arr);
	return newArr;
}

console.log(unique(strings));
