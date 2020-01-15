const mouse = document.querySelector(".logo-heading");
const links = document.querySelectorAll(".nav-link");
const headerImg = document.querySelector(".intro img");
const containerHeader = document.querySelector(".intro h2");
const textHeaders = document.querySelectorAll(".text-content h2");
const contentDestinationImg = document.querySelector(
  ".content-destination img"
);
const changeButtons = document.querySelectorAll(".btn");
const canalRide = document.getElementsByTagName('img')

mouse.addEventListener("mouseover", () => {
  mouse.style.transform = "scale(2.5)";
  mouse.style.transition = "all 0.5s";
});

mouse.addEventListener("mouseleave", () => {
  mouse.style.transform = "scale(2.0)";
  mouse.style.transition = "all 2.0s";
});

links.forEach(link => {
  link.addEventListener("click", () => {
    link.style.color = "dodgerblue";
  });
});

containerHeader.addEventListener("wheel", () => {
  containerHeader.style.backgroundColor = "red";
});

textHeaders.forEach(textHeader => {
  textHeader.addEventListener("mousemove", () => {
    textHeader.style.color = "green";
  });
});

canalRide[2].addEventListener('click', () => {
canalRide[2].style.transform = 'rotate(180deg)'
})


contentDestinationImg.addEventListener("contextmenu", e => {
  e.preventDefault();
  alert("Sorry, image can not be copied!!");
});

window.addEventListener("load", () => {
  alert("Check out all the great vacations we offer!");
});

window.addEventListener("resize", () => {
  alert("you have resized the window");
});

changeButtons.forEach(button => {
  button.addEventListener("dblclick", () => {
    alert("Great Selection!");
  });
});
