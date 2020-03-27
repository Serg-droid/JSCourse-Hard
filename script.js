let num = 266219;

let multiplicationOfNum = 1;

// 1-ый способ ---
// num = String(num).split('');
// for (const numeral of num) {
// 	multiplicationOfNum *= Number(numeral);
// }

// 2-ой способ ---
num = String(num);
for (let i = 0; i < num.length; i += 1) {
	multiplicationOfNum *= num[i];
}

console.log(multiplicationOfNum); // Произведение всех цифр числа

console.log(String(multiplicationOfNum**3).slice(0,2)); // Первые 2 цифры числа в 3-ей степени

