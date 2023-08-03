const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const parra = document.querySelector('#parra');
const input = document.querySelector('input');

input.value = "puto";

h1.innerHTML="putito <br> pendejo";
h1.setAttribute('class','setso');
//clases
h1.classList.add('sexito')
console.log(h1.getAttribute('class'));
console.log({
    h1,
    p,
    parrafito,
    parra,
    input
});
const img = document.createElement('img');
parra.innerHTML = " ";
img.src = "https://images.pexels.com/photos/17463091/pexels-photo-17463091/free-photo-of-miami.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1v"
console.log(img);
parra.append(img)