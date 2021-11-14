let a  = 5;
let b = 12;



let element = document.getElementById('texte');

let element2 = document.getElementById('valeur');
element2.innerHTML = (a === 5 && b <= 12) ? (a + b).toString() : (b - a).toString();



element2.style.backgroundColor = 'orange';