// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


function Calculator() {
	this.read = function () {
		this.numOne = +prompt('Введите первое число: ', '');
		this.numTwo = +prompt('Введите второе число: ', '');
	};

	this.sum = function () {
		return this.numOne + this.numTwo;
	};

	this.mul = function () {
		return this.numOne * this.numTwo;
	};
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());