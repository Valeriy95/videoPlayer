const btnPlayStop = document.querySelector('.btn-play-stop');
const video = document.querySelector('.video');
const volume = document.querySelector('.volume');
const progressBar = document.querySelector('.progress-bar');
const btnPlay = document.querySelector('.btn-play');
const volumeInput = document.querySelector('.volume-input');
const volumeIcon = document.querySelector('.volume-icon');


let isPlay = false;
let isVolume = true;

btnPlayStop.addEventListener('click', playVideo)


video.addEventListener('timeupdate', function () {
    progressBar.value = parseFloat(video.currentTime / video.duration) * 100
    progressBar.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${progressBar.value}%, rgb(200, 200, 200) ${progressBar.value}%, rgb(200, 200, 200) 100%)`

    if (video.currentTime === video.duration) {
        btnPlayStop.style.backgroundImage = "url('assets/svg/play.svg')";
        btnPlay.style.display = 'block';
        isPlay = false;
    }
})

progressBar.addEventListener('change', function () {
    video.currentTime = ((progressBar.value / 100) * video.duration).toFixed(6);
    progressBar.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${progressBar.value}%, rgb(200, 200, 200) ${progressBar.value}%, rgb(200, 200, 200) 100%)`
    console.log(progressBar.value);
    isPlay = true;
    btnPlay.style.display = 'none';
    video.play();
    btnPlayStop.style.backgroundImage = "url('assets/svg/pause.svg')";
})

btnPlay.addEventListener('click', playVideo);
video.addEventListener('click', playVideo);

function playVideo () {
    if(isPlay === false ) {
        isPlay = true;
        btnPlay.style.display = 'none';
        video.play();
        btnPlayStop.style.backgroundImage = "url('assets/svg/pause.svg')";
    } else {
        isPlay = false;
        btnPlay.style.display = 'block';
        video.pause();
        btnPlayStop.style.backgroundImage = "url('assets/svg/play.svg')";
        progressBar.value = parseFloat(video.currentTime / video.duration) * 100
    }
}

volumeInput.addEventListener('mousemove', function () {
    video.volume = volumeInput.value / 100;
    volumeInput.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${volumeInput.value}%, rgb(200, 200, 200) ${volumeInput.value}%, rgb(200, 200, 200) 100%)`;
    if (video.volume === 0) {
        volumeIcon.style.backgroundImage = "url('assets/svg/mute.svg')";
    } else {
        volumeIcon.style.backgroundImage = "url('assets/svg/volume.svg')";
    }
})

volumeIcon.addEventListener('click', function () {
    if (isVolume === true) {
        isVolume = false;
        volumeIcon.style.backgroundImage = "url('assets/svg/mute.svg')";
        video.volume = 0;
        volumeInput.value = 0;
        volumeInput.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) 0%, rgb(200, 200, 200) 0%, rgb(200, 200, 200) 100%)`;
    } else {
        isVolume = true;
        volumeIcon.style.backgroundImage = "url('assets/svg/volume.svg')";
        video.volume = 1;
        volumeInput.value = 1;
        volumeInput.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${volumeInput.value}%, rgb(200, 200, 200) ${volumeInput.value}%, rgb(200, 200, 200) 100%)`;
    }
})