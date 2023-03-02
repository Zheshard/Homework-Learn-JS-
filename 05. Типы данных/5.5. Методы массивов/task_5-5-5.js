// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
	let newArr = arr.slice();
	return newArr.sort((a, b) => a.localeCompare(b));
}

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);