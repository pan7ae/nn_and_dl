let leftBlock = document.getElementById("leftPhoto");
let rightBlock = document.getElementById("rightPhoto");
let leftPhoto = leftBlock.querySelector('img');
let rightPhoto = rightBlock.querySelector('img');


function showLeftPhoto() {
    console.log('left');
    rightBlock.style.width = '10%';
    leftBlock.style.width = '90%';
    leftPhoto.style.display = 'block';
    leftPhoto.style.width = 'auto';
    rightPhoto.style.display = 'none';
}

function showRightPhoto() {
    console.log('right');
    rightBlock.style.width = '90%';
    leftBlock.style.width = '10%';
    rightPhoto.style.display = 'block';
    rightPhoto.style.width = 'auto';
    leftPhoto.style.display = 'none'

}

function showBothPhotos() {
    console.log('both');
    rightBlock.style.width = '50%';
    leftBlock.style.width = '50%';
    leftPhoto.style.width = '100%';
    rightPhoto.style.width = '100%';
    leftPhoto.style.display = 'block';
    rightPhoto.style.display = 'block';
}