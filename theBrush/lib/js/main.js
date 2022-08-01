let imageButton = document.getElementsByClassName('main_container')[0];
let image = document.getElementById('rengar');
console.log(imageButton);

imageButton.onclick = function() {
    imageButton.style['background-color'] = 'white';
    image.src = "assets/rengar.png";
    alert("You've been deleted!");
    console.log('img src: ' + image.src);
}
