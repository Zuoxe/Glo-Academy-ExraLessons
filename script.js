let currentString = prompt("Введите любой текст.");

const getCorrectText = function (str) {

    let newString = '';

    if (typeof str === "string") {

        str = str.trim();
        newString = str.slice(0, 30) + " ...";

        console.log(newString);

    } else {

        return "Переменная не являеться строкой";

    }
}

getCorrectText(currentString)