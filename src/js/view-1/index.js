let $element = document.querySelector(".element");
let $code = document.getElementById("code");
let $inputs = document.querySelectorAll(".sliders input");
// Convirtiendo el valor Hexadecimal a rgba
const hexToRgba = (shadowColor, shadowColorOpacity) => {
    let r = parseInt(shadowColor.substr(1, 2), 16);
    let g = parseInt(shadowColor.substr(3, 2), 16);
    let b = parseInt(shadowColor.substr(5, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${shadowColorOpacity})`;
};
const generateShadow = () => {
    let hShadow = document.getElementById("h-shadow").value;
    let vShadow = document.getElementById("v-shadow").value; 
    let blurRadius = document.getElementById("blur-radius").value;
    let spreadRadius = document.getElementById("spread-radius").value;
    let shadowColor = document.getElementById("shadow-color").value;
    let shadowColorOpacity = document.getElementById("shadow-color-opacity").value;
    let shadowInset = document.getElementById("shadow-inset").checked;
    let boxShadow = shadowInset ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowColorOpacity)}` : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowColorOpacity)}`;
    $element.style.boxShadow = boxShadow;
    $code.textContent = `box-shadow: ${boxShadow};`;
};
const copyCode = () => {
    $code.select();
    document.execCommand("copy");
};
document.querySelector(".code-wrapper button").addEventListener("click", copyCode);
$inputs.forEach(e => {
    e.addEventListener("input", generateShadow);
});
window.onload = generateShadow();