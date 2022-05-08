export default function menu(btnMenu, menu) {
    const $btnMenu = document.getElementById(btnMenu);
    const $menu = document.getElementById(menu);
    if (window.innerWidth < 1100) {
        $btnMenu.addEventListener("click", () => {
            $btnMenu.classList.toggle("active-menu");
            $menu.classList.toggle("show-menu");
            document.body.classList.toggle("disable-scroll");
            $btnMenu.ariaLabel = "Cerrar menú de navegación";
            if (!$btnMenu.classList.contains("active-menu")) {
                $btnMenu.ariaLabel = "Abrir menú de navegación";
            };
        });
    }
};