let price = 10000; // Значение переменной price
let range = "day"; // Значение переменной range

// Определяем эквивалент range на русском языке
let rangeInRussian;
if (range === "month") {
  rangeInRussian = "месяц";
} else if (range === "day") {
  rangeInRussian = "день";
} else if (range === "week") {
  rangeInRussian = "неделю";
} else {
  rangeInRussian = "неизвестный период";
}

// Формируем строку
let result = `${price} Р в ${rangeInRussian}`;
console.log(result); // Вывод результата



//////////////////////////////////////////////////////


let temp = 25; // Температура
let weather = "clear"; // Погода

// Объявляем переменную activity
let activity;

// Используем условия для определения значения activity
if (temp >= 25 && weather === "clear") {
  activity = "golf"; // Если тепло и ясно
} else if ((temp >= 10 && temp <= 24) || weather === "cloudy") {
  activity = "bowling"; // Если температура от 10 до 24 или облачно
} else {
  activity = "hiking"; // Во всех остальных случаях
}

// Выводим результат
console.log(activity);


//////////////////////////////////////////////////////


let a = 2; // Первое число
let b = 6; // Второе число
let sign = "*"; // Оператор

// Используем конструкцию if...else для проверки оператора
if (sign === "+") {
  console.log(a + b); // Сложение
} else if (sign === "-") {
  console.log(a - b); // Вычитание
} else if (sign === "*") {
  console.log(a * b); // Умножение
} else if (sign === "/") {
  console.log(a / b); // Деление
} else {
  console.log("Неверный оператор"); // Если знак не распознан
}


//////////////////////////////////////////////////////


let a = 2; // Первое число
let b = 0; // Второе число
let sign = "/"; // Оператор

// Используем конструкцию if...else для проверки оператора
if (sign === "+") {
  console.log(a + b); // Сложение
} else if (sign === "-") {
  console.log(a - b); // Вычитание
} else if (sign === "*") {
  console.log(a * b); // Умножение
} else if (sign === "/") {
  if (b === 0) {
    console.log("Делить на 0 нельзя!"); // Проверка на деление на 0
  } else {
    console.log(a / b); // Деление
  }
} else {
  console.log("Неверный оператор"); // Если знак не распознан
}


//////////////////////////////////////////////////////


let word = 'меню'; // Задаем строковую переменную word
let length = word.length; // Находим длину строки word
let sqrtLength = Math.sqrt(length); // Вычисляем квадратный корень длины
let result; // Объявляем переменную result

if (Number.isInteger(sqrtLength)) {
  result = 1; // Если квадратный корень целое число
} else {
  result = 0; // Если квадратный корень дробное число
}

console.log(result); // Выводим результат






