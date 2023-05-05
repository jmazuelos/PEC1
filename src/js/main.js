$(document).ready(function() {
    sideMenu.style.display = 'none';
} )

const sideMenu = document.querySelector(".menu");
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");

document.querySelector("#menuBtn").addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

document.querySelector("#closeBtn").addEventListener('click', () => {
    sideMenu.style.display = 'none';
})