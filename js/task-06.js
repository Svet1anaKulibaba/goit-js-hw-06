// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.


const input = document.querySelector("#validation-input");
const max = document.querySelector('input[data-length="6"]');

input.addEventListener("blur", () => {
    if (input.value.length != max.dataset.length) {
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else {
       input.classList.remove("invalid");
       input.classList.add("valid"); 
    }
})