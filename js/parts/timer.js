function timer() {
    let deadline = '2019-07-04';

    const getTimeRemaining = endtime => {
        const checkTime = i => {
            if (i < 10) { return i = "0" + i; } else { return i;}
        };

        let timeZone = new Date().getTimezoneOffset(),
            t = ((Date.parse(endtime)) - Date.parse(new Date()) + (timeZone * 60000)),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            days =  Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'days': checkTime(days),
            'hours': checkTime(hours),
            'minutes': checkTime(minutes),
            'seconds': checkTime(seconds)
        };
    };

    const setClock = (id, endtime) => {
        let timer = document.querySelector('.eTimer'),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
        }
    };
    setClock('timer', deadline);
}

export default timer;