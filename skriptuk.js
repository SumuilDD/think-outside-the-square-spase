
console.log("✅ Скрипт підключено успішно");

const section = document.getElementById('car');
const leftBtn = document.getElementById('left_btn');
const rightBtn = document.getElementById('right_btn');

let toggle = false;

leftBtn.addEventListener('click', () => {
  toggle = !toggle;
  section.style.backgroundImage = toggle
    ? "url('./pngFolder/background_car2.png')"
    : "url('./pngFolder/background_car3.png')";
});

rightBtn.addEventListener('click', () => {
  toggle = !toggle;
  section.style.backgroundImage = toggle
    ? "url('./pngFolder/background_car3.png')"
    : "url('./pngFolder/background_car2.png')";
});
