let arr = [2546789n, 354678n, 453245667n, 35467890n, 345668798900n, 876543n, 3456576n];
let fourOrTwo = [];

function firstLetter() {
    for (let i = 0; i < arr.length; i++) {
        let firstdigit = arr[i].toString().slice(0, 1);
        if (firstdigit == "2" || firstdigit == "4") {
            fourOrTwo.push(arr[i]);
        }
    }
    return fourOrTwo;
}

function showNumbers() {

    if (fourOrTwo.length > 0) {
        console.log("2 or 4: " + fourOrTwo);
    }
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

function showPrimes(max) {
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            console.log("Делители числа " + i + ": 1 и " + i);
        }
    }
}


firstLetter();
showNumbers();
showPrimes(100);