const $addBox = document.querySelector(".add-box"),
    $popupBox = document.querySelector(".popup-box"),
    $popupTitle = document.querySelector(".header p"),
    $closeIcon = $popupBox.querySelector(".header button"),
    $titleTag = $popupBox.querySelector("input"),
    $descriptionTag = $popupBox.querySelector("textarea"),
    $addNoteBtn = $popupBox.querySelector(".content .add-btn");
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
// Obteniendo las notas de localStorage si existen y parseandolas a objeto js y sino pasamos un array vacío
const notes = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false, updateId;
$addBox.addEventListener("click", () => {
    $titleTag.focus(); // Para que apenas abra el popup para añadir una nota ya pueda ingresar texto en el título
    $popupBox.classList.add("show-box");
});
$closeIcon.addEventListener("click", () => {
    $titleTag.value = "";
    $descriptionTag.value = "";
    $popupTitle.innerText = "Añadir nueva nota";
    $addNoteBtn.innerText = "Añadir nota";
    $popupBox.classList.remove("show-box");
});
const showNotes = () => {
    document.querySelectorAll(".note").forEach(e => e.remove());
    notes.forEach((e, index) => {
        let liTag = `
            <li class="note">
                <div class="details">
                    <textarea readonly>${e.title}</textarea>
                    <textarea readonly>${e.description}.</textarea>
                </div>
                <div class="bottom-content">
                    <span>${e.date}</span>
                    <div class="settings">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                <path d="M381,3054C165,2996,0,2783,0,2560c0-177,113-366,269-449c200-106,441-71,599,87c104,104,152,219,152,362s-48,258-152,362   C743,3047,550,3100,381,3054z"/>
                                <path d="M2433,3055c-179-48-321-193-368-372c-69-266,100-547,372-618c266-69,547,100,618,372c69,266-100,547-372,618   C2612,3074,2502,3073,2433,3055z"/>
                                <path d="M4485,3056c-171-43-326-195-370-363c-46-178,5-363,137-495c244-244,657-175,810,134c78,157,78,299,0,456   C4958,2999,4713,3113,4485,3056z"/>
                            </g>
                        </svg>
                        <ul class="menu">
                            <li class="update" onclick="updateNote(${index}, '${e.title}', '${e.description}')">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                        <path d="M3861,5110c-57-12-157-60-201-96c-55-45-3166-3188-3178-3211C465,1773,0,138,0,112C0,59,62,0,117,0c10,0,394,108,852,239   l834,240l136,134c399,393,2734,2707,2897,2871c243,243,279,305,279,476c0,89-17,155-58,230c-37,69-787,823-858,864   c-25,14-68,33-95,41C4042,5114,3918,5122,3861,5110z M4048,4865c47-20,784-752,814-810c29-55,29-145,0-200c-11-22-139-158-286-305   l-266-265l-512,513l-513,512l265,266c170,170,279,273,305,285C3904,4884,3997,4886,4048,4865z M3338,3927l212-212L2431,2596   L1312,1477l-85,169c-47,93-95,178-107,189c-19,17-39,21-137,23c-63,2-113,7-111,12c4,9,2241,2268,2248,2269   C3123,4140,3221,4044,3338,3927z M4138,3120c-5-10-2260-2245-2268-2248c-5-2-10,48-12,111c-2,98-6,118-23,137c-11,12-96,60-189,107   l-169,85l1119,1119l1119,1119l212-212C4044,3221,4139,3123,4138,3120z M1085,1412l110-217l217-110l218-110V823V671l-52-16   c-29-8-154-44-278-80l-225-64L793,793l-282,282l64,225c36,124,72,249,80,278l16,52h152h152L1085,1412z M630,625   c101-101,182-186,180-188c-10-8-513-148-517-144c-5,6,140,517,147,517C443,810,528,727,630,625z"/>
                                    </g>
                                </svg>
                                Editar
                            </li>
                            <li class="trash" data-id="${index}">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                        <path d="M1871,5109c-128-25-257-125-311-241c-37-79-50-146-50-259v-89h-389c-222,0-411-4-442-10c-187-36-330-184-361-376   c-30-181,66-371,231-458l69-36l6-58c4-31,65-763,136-1627c72-863,134-1587,139-1608c36-155,177-295,335-332c91-22,2561-22,2652,0   c158,37,299,177,335,332c5,21,67,745,139,1608c71,864,132,1596,136,1627l6,58l69,36c165,87,261,277,231,458   c-31,192-174,340-361,376c-31,6-220,10-442,10h-389v89c0,48-5,112-10,142c-34,180-179,325-359,359C3175,5122,1935,5122,1871,5109z    M3230,4800c60-31,80-78,80-190v-90h-750h-750v90c0,110,20,159,78,189c36,19,60,20,670,21C3173,4820,3192,4819,3230,4800z    M4430,4200c45-23,80-80,80-130s-35-107-80-130c-39-20-55-20-1870-20s-1831,0-1870,20c-45,23-80,80-80,130c0,48,35,107,78,129   c36,20,65,20,1870,21C4376,4220,4391,4220,4430,4200z M4194,3578c-2-24-63-747-134-1606C3920,278,3931,374,3867,326l-28-21H2560   H1281l-28,21c-64,48-53-48-193,1646c-71,859-132,1582-134,1606l-6,42h1640h1640L4194,3578z"/>
                                        <path d="M1587,3299c-25-13-45-34-58-62l-21-43l76-1234c85-1381,76-1299,155-1340c51-25,91-25,142,0c27,14,46,34,60,63l21,43   l-76,1234c-85,1381-76,1299-155,1340C1681,3325,1636,3325,1587,3299z"/>
                                        <path d="M2488,3299c-23-12-46-35-58-59c-20-39-20-57-20-1280c0-1224,0-1241,20-1280c23-45,80-80,130-80s107,35,130,80   c20,39,20,56,20,1280s0,1241-20,1280C2653,3313,2563,3339,2488,3299z"/>
                                        <path d="M3387,3299c-77-41-68,37-153-1339l-76-1234l21-43c14-29,33-49,60-63c51-25,91-25,142,0c79,41,70-41,155,1340l76,1234   l-21,43C3554,3312,3464,3340,3387,3299z"/>
                                    </g>
                                </svg>
                                Eliminar
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        `;
        $addBox.insertAdjacentHTML("afterend", liTag);
    });
};
showNotes();
// Actualizando nota
function updateNote(id, title, description) {
    isUpdate = true;
    updateId = id;
    $popupBox.classList.add("show-box");
    $titleTag.value = title;
    $descriptionTag.value = description;
    $addNoteBtn.innerText = "Actualizar";
    $popupTitle.innerText = "Actualizar nota";
};
function settings() {
    document.querySelectorAll(".settings svg").forEach(el => {
        el.addEventListener("click", () => {
            el.parentElement.classList.add("show-menu");
        });
        document.addEventListener("click", e => {
            if (e.target.tagName != "svg" || e.target != el) {
                // Removiendo la clase para mostrar el menú si de la click en cualquier parte del menú
                el.parentElement.classList.remove("show-menu");
            };
        });
    });
    // Borrando nota
    document.querySelectorAll(".settings .trash").forEach(e => {
        e.addEventListener("click", () => {
            // console.log(e.dataset.id);
            let confirmDelete = confirm("¿Estás seguro de eliminar esta nota?");
            if (!confirmDelete) return;
            notes.splice(e.dataset.id, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            showNotes();
            if (document.querySelector(".note")) {
                settings();
            };
        });
    });
};
if (document.querySelector(".note")) {
    settings();
};
$addNoteBtn.addEventListener("click", e => {
    e.preventDefault();
    let noteTitle = $titleTag.value,
        noteDescription = $descriptionTag.value;
    if (noteTitle || noteDescription) {
        let date = new Date(),
            month = months[date.getMonth()],
            day = date.getDate(),
            year = date.getFullYear();
        let noteInfo = {
            title: noteTitle, description: noteDescription, date: `${month} ${day}, ${year}`
        };
        if (!isUpdate) {
            notes.push(noteInfo); // Añadiendo nota a las notas
        } else {
            notes[updateId] = noteInfo; // Actualizando un nota específica
        };
        // Guardando las notas en Local Storage
        localStorage.setItem("notes", JSON.stringify(notes));
        $popupBox.classList.remove("show-box");
        showNotes();
        $titleTag.value = "";
        $descriptionTag.value = "";
        settings();
    };
});