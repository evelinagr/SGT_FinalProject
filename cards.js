const cardBoxes = document.querySelectorAll('.card-box');

for(let i=0; i <cardBoxes.length; i++){
    const cardBox = cardBoxes[i];
    cardBox.addEventListener('mousemove', rotate)
    cardBox.addEventListener('mouseout', stopRotate)
}


function rotate(event) {
    const card = this.querySelector('.card');
    const halfHeight = card.offsetHeight / 2;

    card.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 10 +'deg) rotateY(' +(event.offsetX - halfHeight) / 5 + 'deg)'
}

function stopRotate(event){
    const card = this.querySelector('.card');
    card.style.transform = 'rotateX(0)';
}