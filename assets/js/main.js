/*
querySelector()
addEventListener()
let counter = 0;
createElement()
createTextNode()
appendChild()
classList
*/

const userInput = document.getElementById('userinput');
const btn = document.getElementById('enter');
const parentUl = document.querySelector('ul');


btn.addEventListener('click', (e) => {
    const childLi = document.createElement('li');
    console.log(childLi)
    childLi.textContent = userInput.value;
    parentUl.appendChild(childLi);
    userInput.value = '';
});
