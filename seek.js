const slider1 = document.getElementById('slider1');
const track1 = document.getElementById('track1');
const currentAudioTime = document.getElementById('currentAudioTime');
const audioTime = document.getElementById('audioTime');
track1.volume = '0.5';

sliderUpdate();
function sliderUpdate() {
    slider1.value = (track1.currentTime / track1.duration) * 100;
    requestAnimationFrame(sliderUpdate);
}

let wasPlaying = false;

slider1.addEventListener('mousedown', function() {
    wasPlaying = !track1.paused;
    track1.pause();
});

slider1.addEventListener('input', function() {
    track1.currentTime = (Number(slider1.value) / 100) * track1.duration;
});

slider1.addEventListener('mouseup', function() {
    if (wasPlaying) track1.play();
});
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
}