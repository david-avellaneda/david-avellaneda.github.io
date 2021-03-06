export default function htmlHeader(container) {
    const $header = document.querySelector(container);
    $header.innerHTML = `
    <nav class="navbar">
        <a href="/" aria-label="Ir a la página de inicio" class="logo">
            <img src="/assets/index/logo-black.svg" alt="Logotipo de David Santiago Avellaneda Montero" />
        </a>
        <button id="icon-menu" class="icon-menu" aria-label="Abrir menú de navegación">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div class="container-menu" id="container-menu">
            <ul class="menu-content">
                <li class="menu-item">
                    <a href="/" class="menu-link">Inicio</a>
                </li>
                <li class="menu-item">
                    <a href="/vista-1.html" class="menu-link">Vista 1</a>
                </li>
                <li class="menu-item">
                    <a href="/vista-2.html" class="menu-link">Vista 2</a>
                </li>
                <li class="menu-item">
                    <a href="/vista-3.html" class="menu-link">Vista 3</a>
                </li>
                <button class="theme-btn" id="theme-btn" aria-label="Cambiar el tema de la web">
                    <div class="circle"></div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                <path d="M2472,5103c-57-20-126-91-146-150c-24-69-23-498,1-568c31-92,134-165,233-165s202,73,233,165c24,70,25,499,1,568   C2751,5080,2602,5149,2472,5103z"></path>
                                <path d="M835,4425c-52-19-130-100-144-151c-6-21-11-62-11-90c0-87,32-133,223-321c182-180,218-203,307-203c130,0,250,120,250,250   c0,89-23,125-203,307c-192,195-234,223-326,223C900,4439,857,4433,835,4425z"></path>
                                <path d="M4084,4415c-36-18-101-76-221-198c-180-182-203-218-203-307c0-130,120-250,250-250c89,0,125,23,307,203   c191,188,223,234,223,321c0,84-17,126-74,182C4287,4445,4181,4464,4084,4415z"></path>
                                <path d="M2405,3834c-11-3-56-12-100-20c-495-95-892-493-1002-1004c-25-119-25-381,0-500c111-515,492-897,1007-1007   c119-25,381-25,500,0c515,110,896,492,1007,1007c25,119,25,381,0,500c-109,509-489,892-997,1005C2747,3831,2450,3845,2405,3834z"></path>
                                <path d="M162,2793c-23-8-62-34-86-59c-100-100-100-248,0-348c70-70,99-76,374-76c274,0,307,7,375,75c98,98,98,252,0,350   c-68,69-101,75-379,74C258,2809,196,2805,162,2793z"></path>
                                <path d="M4386,2794c-57-21-102-58-133-112c-24-40-28-58-28-122s4-82,28-122c32-55,76-92,136-113c64-22,498-22,564,1   c92,31,167,137,167,234s-75,203-167,234C4889,2816,4446,2816,4386,2794z"></path>
                                <path d="M1120,1443c-61-22-377-331-415-407c-49-97-30-203,49-282c56-57,98-74,182-74c87,0,133,32,321,223c142,144,172,180,186,221   c33,98,13,189-59,260C1313,1456,1217,1477,1120,1443z"></path>
                                <path d="M3822,1443c-87-31-162-138-162-233c0-89,23-125,203-307c188-191,234-223,321-223c84,0,126,17,182,74c57,56,74,98,74,182   c0,87-32,133-223,321c-144,142-180,172-221,186C3936,1464,3879,1464,3822,1443z"></path>
                                <path d="M2476,886c-57-21-108-67-136-122c-24-47-25-54-28-297c-3-291,2-319,74-391c100-100,248-100,348,0c70,70,76,99,76,375   c0,255-5,290-56,356C2696,883,2567,920,2476,886z"></path>
                            </g>
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                <path d="M1810,5071c-509-169-902-442-1265-878c-61-74-198-291-259-413c-140-274-229-565-267-870c-20-156-17-508,5-655   c84-578,326-1066,729-1474c405-409,910-662,1492-747c144-21,499-24,645-5c749,95,1402,486,1826,1091c113,161,218,359,289,542   c46,119,115,352,115,390c0,42-36,106-73,128c-80,49-141,36-260-54c-326-249-663-378-1063-406c-156-12-231-9-404,16   c-754,109-1373,659-1576,1402c-84,309-86,670-4,986c67,260,148,425,345,704c53,75,60,128,23,194C2056,5113,1977,5127,1810,5071z"/>
                            </g>
                        </svg>
                    </span>
                </button>
            </ul>
        </div>
    </nav>`;
    $header.classList.add("header");
};