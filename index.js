function burgerMenuToggle() {
    let burgerBtn = document.querySelector(".btn-menu-toggle-js");
    let burgerMenu = document.querySelector(".menu");

    burgerBtn.addEventListener("click", function (e) {
        this.classList.toggle("open");
        if (this.classList.contains("open")) {
            burgerMenu.classList.add("open");
            disableScroll();
        } else {
            burgerMenu.classList.remove("open");
            enableScroll();
        }
    });
}

function disableScroll() {
    const body = document.body;
    let pagePosition = window.scrollY;
    body.classList.add("disable-scroll");
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + "px";
}

function enableScroll() {
    const body = document.body;
    let pagePosition = parseInt(body.dataset.position, 10);
    body.style.top = "auto";
    body.classList.remove("disable-scroll");
    window.scroll({ top: pagePosition, left: 0 });
    body.removeAttribute("data-position");
}

burgerMenuToggle();
