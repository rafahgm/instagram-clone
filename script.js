const display = document.querySelector("#display");
const buffer = document.querySelector("#buffer");

const images = [
  "phone-content1.jpg",
  "phone-content2.jpg",
  "phone-content3.jpg",
  "phone-content4.jpg",
  "phone-content5.jpg",
];

let currentIndex = 0;
let nextIndex = 1;

display.style.backgroundImage = `url("./${images[currentIndex]}")`;
buffer.style.backgroundImage = `url("./${images[nextIndex]}")`;

setInterval(() => {
  display.style.transition = "all 2s";
  display.style.opacity = "0";

  console.log(currentIndex, nextIndex);
  setTimeout(() => {
    display.style.backgroundImage = `url("./${images[nextIndex]}")`;

    display.style.transition = "none";
    display.style.opacity = 1;

    currentIndex = nextIndex;
    if (currentIndex === images.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
    buffer.style.backgroundImage = `url("./${images[nextIndex]}")`;
  }, 2500);
}, 3000);
