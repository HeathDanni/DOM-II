// Your code goes here

const header = document.querySelector('h1');

header.addEventListener('mouseover', () => header.style.color = 'green');
header.addEventListener('mouseout', () => header.style.color = 'black');

const navLink = document.querySelectorAll('.nav-link')


// `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`