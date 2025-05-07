// Scroll-to-Top Button
window.onscroll = function () {
    let scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

document.getElementById("scroll-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Countdown Timer
let endDate = new Date("May 31, 2025 23:59:59").getTime();

let countdown = setInterval(function () {
    let now = new Date().getTime();
    let distance = endDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerText = "EXPIRED";
    }
}, 1000);

// Notification Pop-up
window.onload = function () {
    setTimeout(function () {
        document.querySelector('.notification').style.display = 'block';
    }, 3000);
};

document.querySelector('.close-popup').addEventListener('click', function () {
    document.querySelector('.notification').style.display = 'none';
});
