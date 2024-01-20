let num = 266219;
let numString = num.toString();
let total = 1;

for (let i = 0; i < numString.length; i++) {

    total *= Number(numString[i]);
}

console.log("Приозведение чисел равно: " + total);

total = total ** 3

console.log("После возведения в степень: " + total);
console.log(total.toString().substr(0, 2));
