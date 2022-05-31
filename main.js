let amount = 0;
let jsonData = JSON.parse(products);
let imgCarousel = document.querySelector(".array-images");
let mainImage = document.querySelector(".preview");

function updateCounter() {
    document.getElementById("amount").innerHTML = parseInt(amount);
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

for (i = 0; i < jsonData.length; i++) {
    let button = document.createElement("button");
    imgCarousel.append(button);
    let image = document.createElement("img");
    image.src = jsonData[i];
    button.append(image);
    button.classList.add("btn");
    if (i == 0) { button.classList.add("img-active") }
}

const images = document.querySelectorAll(".btn");
images.forEach((element) => {
    element.addEventListener("click", () => {
        mainImage.src = element.firstChild.src.replace("-thumbnail", "");
        selectedImage(this);
    })
});


function selectedImage(button) {
    let oldImg = document.getElementsByClassName("img-active")[0];
    oldImg.classList.toggle("img-active");
    button.classList.toggle("img-active");
}