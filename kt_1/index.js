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