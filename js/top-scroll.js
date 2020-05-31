window.addEventListener("scroll", function () {
    var mainElm = document.getElementById("main");
    var y = window.pageYOffset;
    if (y > 0) {
        mainElm.classList.remove('black');
    } else {
        mainElm.classList.add('black');
    }
});