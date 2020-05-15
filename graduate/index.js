// const ImageReadingButton = document.querySelector(".image-reading-button");
const video = document.querySelector("#video-player");

let imageCapture;

navigator.mediaDevices.getUserMedia &&
navigator.mediaDevices.getUserMedia({ video: true})
    .then(stream => {
        videoPlayer.srcObject = stream;
        imageCapture = new imageCapture(stream)
})    
    .catch(error => alert(error));
