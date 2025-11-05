let btn = document.querySelector("#btn");
let body = document.querySelector("body");

function color_generate() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

function change() {
    body.style.background = `linear-gradient(to right bottom, ${color_generate()}, ${color_generate()})`;
btn.style.background = `linear-gradient(to right bottom, ${color_generate()}, ${color_generate()})`;
}

let check = true;
let repeat;

btn.addEventListener("click", function () {
    if (check) {
        check = false;
        btn.innerText = "Stop Color Generate";
        btn.style.color="white";
        repeat = setInterval(change, 1000);
    } else {
        check = true;
        btn.innerText = "Start Color Generate";
        clearInterval(repeat);
    }
});