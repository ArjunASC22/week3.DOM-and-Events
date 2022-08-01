let porosDiv = document.querySelector('div');
console.log(porosDiv);

let poroImage = document.createElement('img');

porosDiv.onclick = function() {
    poroImage.src = 'assets/poro1.png';
    console.log(poroImage);
    porosDiv.appendChild(poroImage);
}