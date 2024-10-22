const btnPlayStop = document.querySelector('.btn-play-stop');
const video = document.querySelector('.video');
const volume = document.querySelector('.volume');
const progressBar = document.querySelector('.progress-bar');
const btnPlay = document.querySelector('.btn-play');


let isPlay = false;

btnPlayStop.addEventListener('click', playVideo)


video.addEventListener('timeupdate', function () {
    progressBar.value = parseFloat(video.currentTime / video.duration) * 100
    progressBar.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${progressBar.value}%, rgb(200, 200, 200) ${progressBar.value}%, rgb(200, 200, 200) 100%)`
    console.log(video.currentTime )
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