export function phoneCarousel(display, buffer) {
  const images = [
    "img/phone-content1.jpg",
    "img/phone-content2.jpg",
    "img/phone-content3.jpg",
    "img/phone-content4.jpg",
    "img/phone-content5.jpg",
  ];

  let currentIndex = 0;
  let nextIndex = 1;

  display.style.backgroundImage = `url("./${images[currentIndex]}")`;
  buffer.style.backgroundImage = `url("./${images[nextIndex]}")`;

  setInterval(() => {
    display.style.transition = "all 2s";
    display.style.opacity = "0";

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
}
