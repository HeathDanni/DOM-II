// Your code goes here

const header = document.querySelector('h1');

header.addEventListener('mouseover', () => header.style.color = 'green');
header.addEventListener('mouseout', () => header.style.color = 'black');

const image = document.querySelector('img');

image.addEventListener('load', () => image.style.width = '400px');






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