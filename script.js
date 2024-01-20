let lang = prompt("Введите язык. ru/en")

console.log("Через if");

if (lang == 'ru') {
    console.log("Недели на русском языке:");
    console.log("Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресенье");
} else if (lang == 'en') {
    console.log("Weeks in English:");
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

console.log("Через switch");

switch (lang) {
    case "ru":
        console.log("Недели на русском языке:");
        console.log("Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресенье");
        break;
    case "en":
        console.log("Weeks in English:");
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
    default:
        break;
}

//Через многомерный массив не смог сделать((((

let namePerson = prompt("Введите имя: ");
let indetificatePerson = (namePerson === "Артем") ? "директор" : (namePerson === "Александр") ? "преподаватель" : "студент";

console.log(indetificatePerson);