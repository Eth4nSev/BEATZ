const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const track1 = document.getElementById("track1");
const track2 = document.getElementById("track2");
const track3 = document.getElementById("track3");

const fullGUI = document.getElementById("fullGUI");
const pauseIcon = document.getElementById("pauseIcon");
const songInfo = document.getElementById("song-info");
const songInfoAlbum = document.getElementById("info-album");
const songInfoTitle = document.getElementById("info-title");
const songInfoArtist = document.getElementById("info-artist");

const customMenu = document.querySelector('.contextContainer');
const customMenuContainer = [
	document.getElementById('pn'),
	document.getElementById('aq'),
	document.getElementById('cq')
];
let currentAlbumSrc = null;

const notify = document.getElementById('notify');
const notifyText = document.getElementById('notifyText');

const buVideo = document.getElementById("buVideo");
const danVideo = document.getElementById("danVideo");
const playVideo = document.getElementById("playVideo");

const queue = [];

const versionAlert = document.getElementById('versionAlert');
const versionArrow = document.getElementById('versionArrow');
versionAlert.style.right = '20px';
versionAlert.style.transitionDelay = '0.5s';
versionAlert.style.transitionDuration = '0.5s';

videoReset();

function videoReset() {
	buVideo.style.opacity = "0";
	buVideo.style.transitionDuration = "0.5s";
	buVideo.pause();
	danVideo.style.opacity = "0";
	danVideo.style.transitionDuration = "0.5s";
	danVideo.pause();
	playVideo.style.opacity = "0";
	playVideo.style.transitionDuration = "0.5s";
	playVideo.pause();
}

function reset() {
	track1.pause();
	track1.volume = "0.5";
	track1.currentTime = 0;
	track2.pause();
	track2.currentTime = 0;
	track3.pause();
	track3.volume = "0.5";
	track3.currentTime = 0;
	
	videoReset();
	
	document.querySelector("html").style.backgroundImage = "url('images/backgrounds/black.png')";
	document.querySelector("html").style.transitionDuration = "0.5s";
	
	player1.style.bottom = "-10em";
	player1.style.transitionDuration = "0.2s";
	player2.style.bottom = "-10em";
	player2.style.transitionDuration = "0.2s";
	player3.style.bottom = "-10em";
	player3.style.transitionDuration = "0.2s";
}

function play1() {
	reset();
	
	buVideo.play();
	buVideo.style.opacity = "0.25";
	buVideo.style.transitionDuration = "1s";
	
	player1.style.transitionDuration = "0.2s";
	player1.style.bottom = "10px";
	track1.play();
	track1.currentTime = 0;

	if (queue.length === 0) {
		const skipButtons = document.getElementsByClassName('skipButton');
		for (let i = 0; i < skipButtons.length; i++) {
			skipButtons[i].style.display = 'none';
		}
    }
	else {
		const skipButtons = document.getElementsByClassName('skipButton');
		for (let i = 0; i < skipButtons.length; i++) {
			skipButtons[i].style.display = 'inline-block';
		}
	}
}
function play2() {
	reset();
	
	danVideo.play();
	danVideo.style.opacity = "0.25";
	danVideo.style.transitionDuration = "1s";
	
	player2.style.transitionDuration = "0.2s";
	player2.style.bottom = "10px";
	track2.play();
	track2.currentTime = 0;

	if (queue.length === 0) {
		const skipButtons = document.getElementsByClassName('skipButton');
		for (let i = 0; i < skipButtons.length; i++) {
			skipButtons[i].style.display = 'none';
		}
    }
	else {
		const skipButtons = document.getElementsByClassName('skipButton');
		for (let i = 0; i < skipButtons.length; i++) {
			skipButtons[i].style.display = 'inline-block';
		}
	}
}
function play3() {
	reset();
	
	playVideo.play();
	playVideo.style.opacity = "0.25";
	playVideo.style.transitionDuration = "1s";
	
	player3.style.transitionDuration = "0.2s";
	player3.style.bottom = "10px";
	track3.play();
	track3.currentTime = 0;

	if (queue.length === 0) {
		const skipButtons = document.getElementsByClassName('skipButton');
		for (let i = 0; i < skipButtons.length; i++) {
			skipButtons[i].style.display = 'none';
		}
    }
	else {
		const skipButtons = document.getElementsByClassName('skipButton');
		for (let i = 0; i < skipButtons.length; i++) {
			skipButtons[i].style.display = 'inline-block';
		}
	}
}
function spotify() {
	track1.pause();
	track2.pause();
	track3.pause();
}
function dismissPlayer() {
	queue.length = 0;
	reset();
}

function full() {
	document.body.style.overflow = "hidden";
	if (player1.style.bottom === "10px") {
		buVideo.style.opacity = "1";
		buVideo.style.zIndex = "1000";
		buVideo.style.transitionDuration = "0s";
	}
	if (player2.style.bottom === "10px") {
		danVideo.style.opacity = "1";
		danVideo.style.zIndex = "1000";
		danVideo.style.transitionDuration = "0s";
	}
	if (player3.style.bottom === "10px") {
		playVideo.style.opacity = "1";
		playVideo.style.zIndex = "1000";
		playVideo.style.transitionDuration = "0s";
	}
	fullGUI.style.bottom = "10px";
	fullGUI.style.transitionDelay = "0s";
	fullGUI.style.transitionDuration = "0.2s";
	songInfo.style.visibility = "hidden";
	pauseIcon.src = "images/pause.png";
}
function exitFull() {
	document.body.style.overflow = "visible";
	if (player1.style.bottom === "10px") {
		buVideo.play();
		buVideo.style.opacity = "0.25";
		buVideo.style.zIndex = "-1000";
		buVideo.style.transitionDuration = "0s";
	}
	if (player2.style.bottom === "10px") {
		danVideo.play();
		danVideo.style.opacity = "0.25";
		danVideo.style.zIndex = "-1000";
		danVideo.style.transitionDuration = "0s";
	}
	if (player3.style.bottom === "10px") {
		playVideo.play();
		playVideo.style.opacity = "0.25";
		playVideo.style.zIndex = "-1000";
		playVideo.style.transitionDuration = "0s";
	}
	fullGUI.style.bottom = "-10em";
	fullGUI.style.transitionDuration = "0.2s";
	songInfo.style.visibility = "hidden";
}
function togglePause() {
	if (player1.style.bottom === "10px") {
		if (track1.paused !== true) {
			buVideo.pause();
			track1.pause();
			pauseIcon.src = "images/play.png";
		}
		else {
			buVideo.play();
			track1.play();
			pauseIcon.src = "images/pause.png";
		}
	}
	if (player2.style.bottom === "10px") {
		if (track2.paused !== true) {
			danVideo.pause();
			track2.pause();
			pauseIcon.src = "images/play.png";
		}
		else {
			danVideo.play();
			track2.play();
			pauseIcon.src = "images/pause.png";
		}
	}
	if (player3.style.bottom === "10px") {
		if (track3.paused !== true) {
			playVideo.pause();
			track3.pause();
			pauseIcon.src = "images/play.png";
		}
		else {
			playVideo.play();
			track3.play();
			pauseIcon.src = "images/pause.png";
		}
	}
}
function ToggleInfo() {
	if (songInfo.style.visibility === "hidden") {
		songInfo.style.visibility = "visible";
	}
	else {
		songInfo.style.visibility = "hidden";
	}
	if (player1.style.bottom === "10px") {
		songInfoAlbum.src = "images/songs/busted.jpg";
		songInfoTitle.innerHTML = "BUSTED";
		songInfoArtist.innerHTML = "Tokyo Machine, Teminite & Boom Kitty";
	}
	if (player2.style.bottom === "10px") {
		songInfoAlbum.src = "images/songs/danger.jpg";
		songInfoTitle.innerHTML = "Danger";
		songInfoArtist.innerHTML = "Teminite & Boom Kitty";
	}
	if (player3.style.bottom === "10px") {
		songInfoAlbum.src = "images/songs/play.jpg";
		songInfoTitle.innerHTML = "PLAY (VIP)";
		songInfoArtist.innerHTML = "Tokyo Machine";
	}
}
function exitInfo() {
	songInfo.style.visibility = "hidden";
}
function showGUI() {
	fullGUI.style.opacity = '1';
	fullGUI.style.transitionDuration = '0.25s';
}
function hideGUI() {
	fullGUI.style.opacity = '0';
	fullGUI.style.transitionDuration = '2s';
}

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();

    // Show menu to measure its size
    customMenu.style.display = 'block';
    customMenu.style.opacity = '1';

    // Get menu dimensions
    const menuWidth = customMenu.offsetWidth || 200;
    const menuHeight = customMenu.offsetHeight || 120;

    // Get viewport and scroll dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    // Calculate position
    let left = event.clientX + scrollX;
    let top = event.clientY + scrollY;

    // Adjust if menu would overflow right
    if (event.clientX + menuWidth > viewportWidth) {
  	  left = scrollX + event.clientX - menuWidth;
	}
    // Adjust if menu would overflow bottom
    if (event.clientY + menuHeight > viewportHeight) {
        top = scrollY + viewportHeight - menuHeight - 5;
    }

    customMenu.style.left = left + 'px';
    customMenu.style.top = top + 'px';

    customMenuContainer[0].style.display = 'block';
    customMenuContainer[1].style.display = 'block';
    customMenuContainer[2].style.display = 'block';
    if (event.target.classList.contains('album')) {
        currentAlbumSrc = event.target.src;
    } else {
        customMenuContainer[0].style.display = 'none';
        customMenuContainer[1].style.display = 'none';
        currentAlbumSrc = null;
    }
});
document.addEventListener('click', function(event) {
    if (!customMenu.contains(event.target)) {
        customMenu.style.display = 'none';
    }
});

function playNext() {
	customMenu.style.display = 'none';
	notify.style.top = '-20em';
	notify.style.transitionDuration = '0.5s';
	setTimeout(function() {
		if (!currentAlbumSrc) return;

		if (currentAlbumSrc.includes('busted.jpg')) queue.unshift(track1);
		else if (currentAlbumSrc.includes('danger.jpg')) queue.unshift(track2);
		else if (currentAlbumSrc.includes('play.jpg')) queue.unshift(track3);
		const skipButtons = document.getElementsByClassName('skipButton');
		for (let i = 0; i < skipButtons.length; i++) {
			skipButtons[i].style.display = 'inline-block';
		}
		notifyText.innerHTML = 'Playing Next';
		notify.style.top = '20px';
		notify.style.transitionDuration = '0.5s';
		setTimeout(function() {
			notify.style.top = '-20em';
			notify.style.transitionDuration = '0.5s';
		}, 3000);
	}, 500);
}
function addQueue() {
	customMenu.style.display = 'none';
	notify.style.top = '-20em';
	notify.style.transitionDuration = '0.5s';
	setTimeout(function() {
		if (!currentAlbumSrc) return;

		if (currentAlbumSrc.includes('busted.jpg')) queue.push(track1);
		else if (currentAlbumSrc.includes('danger.jpg')) queue.push(track2);
		else if (currentAlbumSrc.includes('play.jpg')) queue.push(track3);
		const skipButtons = document.getElementsByClassName('skipButton');
		for (let i = 0; i < skipButtons.length; i++) {
			skipButtons[i].style.display = 'inline-block';
		}
		notifyText.innerHTML = 'Added to Queue';
		notify.style.top = '20px';
		notify.style.transitionDuration = '0.5s';
		setTimeout(function() {
			notify.style.top = '-20em';
			notify.style.transitionDuration = '0.5s';
		}, 3000);
	}, 500);
}
function clearQueue() {
	customMenu.style.display = 'none';
	notify.style.top = '-20em';
	notify.style.transitionDuration = '0.5s';
	setTimeout(function() {
		queue.length = 0;
		notifyText.innerHTML = 'Queue Cleared';
		notify.style.top = '20px';
		notify.style.transitionDuration = '0.5s';
		setTimeout(function() {
			notify.style.top = '-20em';
			notify.style.transitionDuration = '0.5s';
		}, 3000);
	}, 500);
}
const allTracks = [
    track1, track2, track3
];

allTracks.forEach(track => {
    track.addEventListener('ended', function() {
        exitFull();
        playNextOnQueue();
    });
});

const loadingMsg = document.getElementById('loadingMsg');

allTracks.forEach(media => {
    media.addEventListener('waiting', () => {
        loadingMsg.style.display = 'block';
    });
    media.addEventListener('playing', () => {
        loadingMsg.style.display = 'none';
    });
    media.addEventListener('canplay', () => {
        loadingMsg.style.display = 'none';
    });
    media.addEventListener('ended', () => {
        loadingMsg.style.display = 'none';
    });
});

function playAll() {
    queue.push(
        track2, track3
    );
	play1();
}

function playNextOnQueue() {
	const nextTrack = queue.shift();
    if (nextTrack === track1) play1();
    else if (nextTrack === track2) play2();
    else if (nextTrack === track3) play3();
}
function rewind() {
	if (player1.style.bottom === '10px') track1.currentTime = '0';
    else if (player2.style.bottom === '10px') track2.currentTime = '0';
    else if (player3.style.bottom === '10px') track3.currentTime = '0';
}

let mouseStopTimeout;

document.addEventListener('mousemove', function () {
	showGUI();
	document.querySelector('html').style.cursor = 'default';
	clearTimeout(mouseStopTimeout);
	if (songInfo.style.visibility !== 'visible') {
		mouseStopTimeout = setTimeout(function() {
			hideGUI();
			document.querySelector('html').style.cursor = 'none';
		}, 1500);
	}
});

function dismissVersion() {
	if (versionAlert.style.right === '20px') {
		versionAlert.style.right = '-30.75em';
		versionAlert.style.transitionDelay = '0s';
		versionAlert.style.transitionDuration = '0.5s';
		versionArrow.style.rotate = '180deg';
		versionArrow.style.transitionDuration = '0.25s';
	}
	else {
		versionAlert.style.right = '20px';
		versionAlert.style.transitionDelay = '0s';
		versionAlert.style.transitionDuration = '0.5s';
		versionArrow.style.rotate = '0deg';
		versionArrow.style.transitionDuration = '0.25s';
	}
}