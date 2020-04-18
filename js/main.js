// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
let img = document.getElementsByClassName('pics');
let modalImg = document.getElementById('modal-image');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => (modal.style.display = 'none'));

// When the user clicks off image anywhere in window , close the modal
window.addEventListener('click', () => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Loop through all images to listen for when they are clicked & display in modal
for (var i = 0, len = img.length; i < len; i++) {
  img[i].addEventListener('click', openModal);
}

// function to display the modal with the clicked image
function openModal(img) {
  modal.style.display = 'block';
  modalImg.src = this.src;
}
