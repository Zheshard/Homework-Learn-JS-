// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Например:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
let arr1 = [-1, 2, 3, -9];
let arr2 = [2, -1, 2, 3, -9];
let arr3 = [-1, 2, 3, -9, 11];
let arr4 = [-2, -1, 1, 2];
let arr5 = [100, -9, 2, -3, 5];
let arr6 = [1, 2, 3];

function getMaxSubSum(arr) {
	let sum = 0;
	let maxSum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (sum > maxSum) maxSum = sum;
		if (sum < 0) sum = 0;
	}
	return maxSum;
}

console.log(getMaxSubSum(arr1));
console.log(getMaxSubSum(arr2));
console.log(getMaxSubSum(arr3));
console.log(getMaxSubSum(arr4));
console.log(getMaxSubSum(arr5));
console.log(getMaxSubSum(arr6));

