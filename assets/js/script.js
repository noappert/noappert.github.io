document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll(".element");
    elements.forEach(function (element) {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        element.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    });
    // var all = document.querySelectorAll("body");
    // all.forEach(function (element) {
    //     element.innerHTML = "<p class='center'>Site en developpement 💟</p>"
    // });
});

function opening (link) {
    window.open(link, '_blank');
}

function changePage (link) {
    var elements = document.querySelectorAll(".element");
    elements.forEach(function (element) {
        element.style.backgroundColor = "rgb(0,0,0,0)";
    });
    setTimeout(function () {
        window.location.href = link;
    }, 1000);
}