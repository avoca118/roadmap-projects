const message = document.querySelector('#message');
const current = document.querySelector('#current');
const maxLength = 250;

message.addEventListener('input', () => {
    const length = message.value.length;
    current.textContent = length;

    if (length === maxLength) {
        message.style.border = '2px solid red';
    } else {
        message.style.border = '2px solid black';
    }
});
