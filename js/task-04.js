// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.getElementById("value");

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
}
const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);