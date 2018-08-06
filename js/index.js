// Search and modify
let links = document.querySelectorAll('a');
links[0].textContent = 'Mozilla Developer Network';
links[0].href = 'https://developer.mozilla.org';
links[1].textContent = 'Google';
links[1].href = 'https://google.com';
links[2].textContent = 'IBM';
links[2].href = 'https://ibm.com';
// Add new element
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
const section = document.querySelector('section');
section.appendChild(para);
