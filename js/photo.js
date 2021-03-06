var takePhotoButton = document.querySelector('button#takePhoto');
var canvas = document.querySelector('canvas');

takePhotoButton.onclick = takePhoto;

function takePhoto() {
  imageCapture.takePhoto()
  .then(function(blob) {
    console.log('Took photo:', blob);
    img.classList.remove('hidden');
    img.src = URL.createObjectURL(blob);
  })
  .catch(function(error) {
    console.log('takePhoto() error: ', error);
  });
}