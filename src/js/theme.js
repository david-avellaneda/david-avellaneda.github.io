export default function theme(btn) {
    const $btn = document.getElementById(btn);
    const logoWhite = () => {
        document.querySelector(".navbar a img").src = "/assets/index/logo-white.svg"
    };
    const logoBlack = () => {
        document.querySelector(".navbar a img").src = "/assets/index/logo-black.svg"
    };
    if (!localStorage.getItem("theme")) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localStorage.setItem("theme", "dark-theme");
        } else {
            localStorage.setItem("theme", "light-theme");
        };
    };
    if (localStorage.getItem("theme") === "dark-theme") {
        logoWhite();
        document.body.classList.add("dark-theme");
        $btn.classList.add("active-theme-btn");
    } else {
        logoBlack();
        document.body.classList.remove("dark-theme");
        $btn.classList.remove("active-theme-btn");
    };
    $btn.addEventListener("click", () => {
        if (document.body.classList.contains("dark-theme")) {
            logoBlack();
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light-theme");
            $btn.classList.remove("active-theme-btn");
        } else {
            logoWhite();
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme");
            $btn.classList.add("active-theme-btn");
        };
    });
};