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
}

const images = document.querySelectorAll(".btn");
images.forEach((element) => {
    element.addEventListener("click", () => {
        mainImage.src = element.firstChild.src.replace("-thumbnail", "");
        element.classList.add("img-active");
    })
});