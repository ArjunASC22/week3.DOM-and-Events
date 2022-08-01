let newDiv = document.createElement('div');
newDiv.classList.add('champ_container');
newDiv.classList.add('pyke');

let newH2 = document.createElement('h2');

newH2.innerHTML = 'pyke, the bloodharbor ripper';
newDiv.appendChild(newH2);

console.log(newDiv);

let containerDiv = document.getElementsByClassName('main_container')[0];
containerDiv.appendChild(newDiv);

let allPykes = document.querySelectorAll('.pyke');

for (pyke of allPykes) {
    pyke.style.backgroundImage = 'url(assets/pyke.jpg)';
    pyke.style.color = '#92fdfe';
}