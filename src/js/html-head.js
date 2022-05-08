(() => {
    document.querySelector("head").insertAdjacentHTML("beforeend", `
        <!-- Styles -->
        <link rel="stylesheet" href="/src/css/header.css" />
        <!-- Favicon -->
        <link rel="shortcut icon" href="/assets/index/favicon.png" />
        <!-- Font Family -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    `);
})();