// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

stringOne = "innocent rabbit";
stringTwo = 'buy ViAgRA now';
stringThree = 'free xxxxx';

function checkSpam(str) {
	lowerCaseStr = str.toLowerCase();

	if (lowerCaseStr.includes('viagra') || lowerCaseStr.includes('xxx')) return true;
	else return false;
}

console.log(checkSpam(stringOne));
console.log(checkSpam(stringTwo));
console.log(checkSpam(stringThree));