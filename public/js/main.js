
// clickable function

var close = document.getElementById("close");
var ham = document.getElementById("ham");
var mobile = document.getElementById("mobile");

// for bar button

ham.addEventListener("click", function () {
    if (mobile.style.display === "none" || mobile.style.display === "") {
        mobile.style.display = "block";
        ham.style.display = "none";
        close.style.display = "block";
    }
});

// for close button

close.addEventListener("click", function () {
    mobile.style.display = "none";
    close.style.display = "none";
    ham.style.display = "block";
});

// scroll sticky function

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var scrollThreshold = 100; // Adjust this value as needed

    if (window.scrollY > scrollThreshold) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});