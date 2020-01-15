const mouse = document.querySelector('.logo-heading');
mouse.addEventListener("mouseover" , () => {
mouse.style.transform = "scale(2.5)";
mouse.style.transition = "all 0.5s";
})


mouse.addEventListener("mouseleave", () => {
    mouse.style.transform ="scale(2.0)";
    mouse.style.transition =  "all 2.0s";
})

const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', () => {
        link.style.color = "dodgerblue";
    });
});

const headerImg = document.querySelector('.intro img'); 
containerHeader.addEventListener("wheel", () => {
    containerHeader.style.backgroundColor = "red";
})

const containerHeader = document.querySelector('.intro h2');
const textHeaders = document.querySelectorAll('.text-content h2');
textHeaders.forEach(textHeader => {
    textHeader.addEventListener('mousemove', () => {
        textHeader.style.color = 'green';
    });
});


const contentDestinationImg = document.querySelector('.content-destination img');
contentDestinationImg.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert("Sorry, image can not be copied!!");
});


window.addEventListener('load', () => {
    alert('Check out all the great vacations we offer!');
});


window.addEventListener('resize', () => {
    alert('you have resized the window');
});


const changeButtons = document.querySelectorAll('.btn'); 
changeButtons.forEach(button => {
    button.addEventListener('dblclick', () => {
        alert('Great Selection!');
    });
});
