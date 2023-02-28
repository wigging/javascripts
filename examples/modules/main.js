import { sayHello } from './sayhello.js'

const nameElem = document.getElementById('name');
const greetingElem =document.getElementById('greeting');

function displayGreeting() {
    const name = nameElem.value;
    const greeting = sayHello(name);
    greetingElem.innerHTML = greeting;
}

document.addEventListener('submit', displayGreeting);
