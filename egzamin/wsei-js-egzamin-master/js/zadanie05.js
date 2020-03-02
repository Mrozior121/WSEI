const buttons = Array.from(document.querySelectorAll('button'));
const container = document.getElementById('container');

console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        container.innerText = buttons[i].getAttribute('data-text');
    })
}