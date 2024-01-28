function nowDayOfWeek(day) {
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return daysOfWeek[day];
}

function nowMonth(month) {
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    return months[month];
}

function StartZero(num) {
    return num < 10 ? "0" + num : num
}

function seclensionSeconds(seconds) {
    if (seconds === 1 || seconds > 20 && seconds % 10 === 1) {
        return "секунда ";
    } else if (seconds >= 2 && seconds <= 4 || seconds > 20 && (seconds % 10 >= 2 && seconds % 10 <= 4)) {
        return "секунды";
    } else {
        return "секунд";
    }

}
function seclensionMinutes(minutes) {
    if (minutes === 1 || minutes > 20 && minutes % 10 === 1) {
        return "минута ";
    } else if (minutes >= 2 && minutes <= 4 || minutes > 20 && (minutes % 10 >= 2 && minutes % 10 <= 4)) {
        return "минуты";
    } else {
        return "минут";
    }

}

function seclensionHours(hours) {
    if (hours === 1 || hours > 20 && hours % 10 === 1) {
        return "час ";
    } else if (hours >= 2 && hours <= 4 || hours > 20 && (hours % 10 >= 2 && hours % 10 <= 4)) {
        return "часа";
    } else {
        return "часов";
    }

}

function showDateA(currentDate) {
    let currentYear = currentDate.getFullYear();
    let currentMonth = nowMonth(currentDate.getMonth());
    let currentDay = currentDate.getDate();
    let currentDayOfWeek = nowDayOfWeek(currentDate.getDay());
    let currentHour = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();
    let nowTime = `Сегодня ${currentDayOfWeek}, ${currentDay} ${currentMonth} ${currentYear} Год , ${currentHour} ${seclensionHours(currentHour)} ${currentMinutes} ${seclensionMinutes(currentMinutes)} ${currentSeconds} ${seclensionSeconds(currentSeconds)} `;
    return nowTime;
}

function showDateB(currentDate) {
    let currentDay = StartZero(currentDate.getDate());
    let currentMonth = StartZero(currentDate.getMonth() + 1);
    let currentYear = StartZero(currentDate.getFullYear());
    let currentHour = StartZero(currentDate.getHours());
    let currentMinutes = StartZero(currentDate.getMinutes());
    let currentSeconds = StartZero(currentDate.getSeconds());
    let nowTime = `${currentDay}.${currentMonth}.${currentYear}-${currentHour}:${currentMinutes}:${currentSeconds} `;
    return nowTime;
}


function showDateInteval() {
    let currentDate = new Date();

    const DateA = showDateA(currentDate);
    const DateB = showDateB(currentDate);

    // Выводим результат в консоль
    console.log(DateA);
    console.log(DateB);
}

// Устанавливаем интервал для обновления каждую секунду
setInterval(showDateInteval, 1000);


