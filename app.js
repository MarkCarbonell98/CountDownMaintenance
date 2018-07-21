window.addEventListener('DOMContentLoaded', () => {
      let all = document.getElementsByClassName('container2')[0];
      let now, distance, days, hours, minutes, seconds, op, timer, x;
      let daysSpan = document.getElementById('days');
      let hoursSpan = document.getElementById('hours');
      let minutesSpan = document.getElementById('minutes');
      let secondsSpan = document.getElementById('seconds');
      let countDate = new Date("Aug 15, 2018 15:37:25").getTime();

      const fadeIn = (element, time) => {
            op = 0.1;
            timer = setInterval(() => {
                  if (op >= 1) {
                        clearInterval(timer)
                  }
                  element.style.opacity = op;
                  op += 0.01;
            }, time)
      }
       x = setInterval(() => {
            now = new Date().getTime();
            distance = countDate - now;
            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
            daysSpan.innerHTML = days + ' days';
            hoursSpan.innerHTML = hours + ' hours';
            minutesSpan.innerHTML = minutes + ' minutes';
            secondsSpan.innerHTML = seconds + ' seconds';
            if (days === 1) daysSpan.innerHTML = days + ' day';
            if (hours === 1) hoursSpan.innerHTML = hours + ' hour';
            if (minutes === 1) minutesSpan.innerHTML = minutes + ' minute';
            if (seconds === 1) secondsSpan.innerHTML = seconds + ' second';
            if (distance <= 0) {
                  daysSpan.innerHTML = "EXPIRED";
                  hoursSpan.innerHTML = "EXPIRED";
                  minutesSpan.innerHTML = "EXPIRED";
                  secondsSpan.innerHTML = "EXPIRED";
                  clearInterval(x);
            }
      }, 1000)
      fadeIn(all, 30);
})