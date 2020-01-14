// Your code goes here testing push
const navBar = document.querySelector('.main-navigation');
navBar.addEventListener('dblclick', () => {
    navBar.style.backgroundColor = 'blue';
    navBar.stopPropogation();
})

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('contextmenu', () => {
        button.style.backgroundColor = 'red';
    })
})