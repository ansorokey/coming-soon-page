// Reference HTML Elements
const [dd, hh, mm, ss] = [document.querySelector('#dd'), document.querySelector('#hh'), document.querySelector('#mm'), document.querySelector('#ss')]

// Pick any date in the future
// Use .getTime to return the date as a number in milliseconds
const countDownDate = new Date('Oct, 16, 2025 00:00:00').getTime();

// Create an interval to run every second
const x = setInterval(() => {
    // get the current time (in milliseconds)
    const now = new Date().getTime();

    const diff = countDownDate - now;

    // Provided time conversions
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    dd.innerHTML = days;
    hh.innerHTML = hours;
    mm.innerHTML = minutes;
    ss.innerHTML = seconds;

    // if the date has passed (negative difference)
    // Set times to 00s
    if (diff < 0) {
        clearInterval(x);
        dd.innerHTML = '00';
        hh.innerHTML = '00';
        mm.innerHTML = '00';
        ss.innerHTML = '00';
    }
}, 1000)
