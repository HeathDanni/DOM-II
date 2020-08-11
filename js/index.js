// Your code goes here

const header = document.querySelector('h1');
const navLink = document.querySelectorAll('a');
const header2 = document.querySelectorAll('h2');
const paragraphs = document.querySelectorAll('p');
const images = document.querySelectorAll('img');
const navBar = document.querySelector('.main-navigation');

header.addEventListener('mouseover', () => header.style.color = 'green');

header.addEventListener('mouseout', () => header.style.color = 'black');

window.addEventListener('scroll', () => paragraphs.forEach((para) => {
    para.style.backgroundColor = 'black'; 
    para.style.color = 'white'
}));

window.addEventListener('resize', () => header2.forEach((ele) => {
    ele.style.fontSize = '50px';
    ele.style.color = 'magenta';
}));

window.addEventListener('dblclick', () => paragraphs.forEach((para) => {
    para.style.backgroundColor = 'silver';
    para.style.color = 'darkorange';
}));

window.addEventListener('keydown', () => header2.forEach((ele) => ele.style.color = 'blue'));

window.addEventListener('load', () => header.style.color = 'orange');

window.addEventListener('wheel', () => navLink.forEach((ele) => ele.style.color = 'green'));

window.addEventListener('keyup', () => paragraphs.forEach((el) => el.style.color = 'red'));

window.addEventListener('keypress', () => navLink.forEach((el) => el.style.color = 'white'));

const link = document.querySelector('a');

link.addEventListener('click', ((event) => event.preventDefault()));

navBar.addEventListener('click', () => navBar.style.backgroundColor = 'blue');

header.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'pink'
});