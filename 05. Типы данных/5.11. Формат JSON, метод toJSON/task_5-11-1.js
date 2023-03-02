// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

let user = {
	name: "Василий Иванович",
	age: 35
};

let json = JSON.stringify(user, null, 2);
alert(json);

let parseJson = JSON.parse(json);
alert(parseJson);

