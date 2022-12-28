function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorbtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
 
changeColorbtn.addEventListener("click", changeColor);

function changeColor() {
  let color = getRandomHexColor() 
  document.body.style.backgroundColor = color;
  spanColor.textContent = color;
  
}


// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.