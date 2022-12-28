const getSubmit = function (event) {
    event.preventDefault();
    console.log(event.currentTarget);
    if (event.currentTarget.email.value === "" || event.currentTarget.password.value === "") {
        alert("Всі поля повинні бути заповнені");
        return;
    }
    console.log({
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
    });
    event.currentTarget.reset();
}
document.forms[0].addEventListener("submit", getSubmit);