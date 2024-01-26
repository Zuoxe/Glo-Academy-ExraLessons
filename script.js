const daysAndWeek = {
    week: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],

    getDays: function () {
        const currentDate = new Date();
        let currentDay = currentDate.getDay();

        for (let i = 0; i < this.week.length; i++) {
            if (i <= 4) {
                console.log(this.week[i]);
            } else if (i >= 5) {
                console.log(this.week[i].italics());
            } else if (i === currentDay) {
                console.log(this.week[i].bold());
            }
        }
    }
}

daysAndWeek.getDays();