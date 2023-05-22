console.log("This works");
document.getElementById("college").innerHTML = 'Champlain College'
document.getElementById('college').style.color = 'green';

const classOnTitle = document.getElementsByTagName('h1')[0]
console.log('classOnTitle', classOnTitle);

console.log('classOnTitle.innerHTML', classOnTitle.outerHTML);

document.getElementById('program').innerHTML = 'Our Program'
document.querySelector('footer p').innerHTML = 'Nehad Taha'
const title = document.getElementsByTagName('h1')[0];
title.classList.remove('text-secondary');
let mkj = title.classList.add('text-warning');
console.log(title);
document.getElementById('linkBishop').setAttribute('href', ' https://www.usherbrooke.ca/')

document.getElementsByClassName('list-group-item')[3].innerHTML = 'John Doe'
    //Add a teacher
const newNode = document.createElement('li');
newNode.innerHTML = 'New teacher'
document.getElementsByClassName('list-group')[0].appendChild(newNode);