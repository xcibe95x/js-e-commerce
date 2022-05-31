let amount = 0;
let btn1 = document.getElementById("b1");
let btn2 = document.getElementById("b2");
let btn3 = document.getElementById("b3");
let btn4 = document.getElementById("b4");
function updateCounter() {
    document.getElementById("amount").innerHTML = parseInt(amount);
}
function updateImage(imgsrc) {
    document.getElementById("thumb").src = imgsrc.replace("-thumbnail", "");
}
document.getElementById("dec")
.addEventListener("click", () => {
   if (amount != 0) --amount;
    updateCounter();
});
document.getElementById("inc")
.addEventListener("click", () => {
    ++amount; updateCounter();
});
document.getElementById("b1")
.addEventListener("click", () => {
    updateImage(
        btn1.firstChild.src);
        btn1.classList.add("img-active");
        btn2.classList.remove("img-active")
        btn3.classList.remove("img-active")
        btn4.classList.remove("img-active")
});
document.getElementById("b2")
.addEventListener("click", () => {
    updateImage(
        btn2.firstChild.src);
        btn2.classList.add("img-active");
        btn1.classList.remove("img-active")
        btn3.classList.remove("img-active")
        btn4.classList.remove("img-active")
});
document.getElementById("b3")
.addEventListener("click", () => {
    updateImage(
    btn3.firstChild.src);
    btn3.classList.add("img-active");
    btn2.classList.remove("img-active")
    btn1.classList.remove("img-active")
    btn4.classList.remove("img-active")
});
document.getElementById("b4")
.addEventListener("click", () => {
    updateImage(
        btn4.firstChild.src);
        btn4.classList.add("img-active");
        btn2.classList.remove("img-active")
        btn3.classList.remove("img-active")
        btn1.classList.remove("img-active")
});