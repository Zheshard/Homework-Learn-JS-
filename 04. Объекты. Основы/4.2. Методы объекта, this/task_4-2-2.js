// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
// ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
	read() {
		this.numOne = +prompt('Введите первое число: ', '');
		this.numTwo = +prompt('Введите второе число: ', '');
	},

	sum() {
		return this.numOne + this.numTwo;
	},

	mul() {
		return this.numOne * this.numTwo;
	},
}

calculator.read();
alert(`Сумма веденных чисел равна: ${calculator.sum()}`);
alert(`Произведение веденных чисел равно: ${calculator.mul()}`);
