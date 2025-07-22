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

const htVideo = document.getElementById("htVideo");
const vgVideo = document.getElementById("vgVideo");

const queue = [];

videoReset();

function videoReset() {
	htVideo.style.opacity = "0";
	htVideo.style.transitionDuration = "0.5s";
	htVideo.pause();
	vgVideo.style.opacity = "0";
	vgVideo.style.transitionDuration = "0.5s";
	vgVideo.pause();
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
	
	htVideo.play();
	htVideo.style.opacity = "0.25";
	htVideo.style.transitionDuration = "1s";
	
	player1.style.transitionDuration = "0.2s";
	player1.style.bottom = "10px";
	track1.play();
	track1.currentTime = 0;
}
function play2() {
	reset();
	
	vgVideo.play();
	vgVideo.style.opacity = "0.25";
	vgVideo.style.transitionDuration = "1s";
	
	player2.style.transitionDuration = "0.2s";
	player2.style.bottom = "10px";
	track2.play();
	track2.currentTime = 0;
}
function play3() {
	reset();
	
	document.querySelector("html").style.backgroundImage = "url('images/backgrounds/slash_back.png')";
	document.querySelector("html").style.transitionDuration = "1s";
	
	player3.style.transitionDuration = "0.2s";
	player3.style.bottom = "10px";
	track3.play();
	track3.currentTime = 0;
}
function spotify() {
	track1.pause();
	track2.pause();
	track3.pause();
}
function dismissPlayer() {
	reset();
}

function full() {
	if (player1.style.bottom === "10px") {
		document.body.style.overflow = "hidden";
		htVideo.style.opacity = "1";
		htVideo.style.zIndex = "1000";
		htVideo.style.transitionDuration = "0s";
	}
	if (player2.style.bottom === "10px") {
		document.body.style.overflow = "hidden";
		vgVideo.style.opacity = "1";
		vgVideo.style.zIndex = "1000";
		vgVideo.style.transitionDuration = "0s";
	}
	/*if (player3.style.bottom === "10px") {
		document.body.style.overflow = "hidden";
		document.querySelector("html").style.opacity = "1";
		document.querySelector("html").style.zIndex = "1000";
		document.querySelector("html").style.transitionDuration = "0s";
		fullGUI.style.visibility = "visible"
	}*/
	fullGUI.style.bottom = "10px";
	fullGUI.style.transitionDelay = "0s";
	fullGUI.style.transitionDuration = "0.2s";
}
function exitFull() {
	document.body.style.overflow = "visible";
	if (player1.style.bottom === "10px") {
		htVideo.play();
		htVideo.style.opacity = "0.25";
		htVideo.style.zIndex = "-1000";
		htVideo.style.transitionDuration = "0s";
	}
	if (player2.style.bottom === "10px") {
		vgVideo.play();
		vgVideo.style.opacity = "0.25";
		vgVideo.style.zIndex = "-1000";
		vgVideo.style.transitionDuration = "0s";
	}
	/*if (player3.style.bottom === "10px") {
		document.querySelector("html").style.opacity = "0.25";
		//vgVideo.style.zIndex = "-1000";
		document.querySelector("html").style.transitionDuration = "0s";
	}*/
	fullGUI.style.bottom = "-10em";
	fullGUI.style.transitionDuration = "0.2s";
	songInfo.style.visibility = "hidden";
	pauseIcon.src = "images/pause.png";
}
function togglePause() {
	if (player1.style.bottom === "10px") {
		if (track1.paused !== true) {
			htVideo.pause();
			track1.pause();
			pauseIcon.src = "images/play.png";
		}
		else {
			htVideo.play();
			track1.play();
			pauseIcon.src = "images/pause.png";
		}
	}
	if (player2.style.bottom === "10px") {
		if (track2.paused !== true) {
			vgVideo.pause();
			track2.pause();
			pauseIcon.src = "images/play.png";
		}
		else {
			vgVideo.play();
			track2.play();
			pauseIcon.src = "images/pause.png";
		}
	}
	/*if (player3.style.bottom === "10px") {
		if (track3.paused !== true) {
			//vgVideo.pause();
			track3.pause();
			pauseIcon.src = "images/play.png";
		}
		else {
			//vgVideo.play();
			track3.play();
			pauseIcon.src = "images/pause.png";
		}
	}*/
}
function ToggleInfo() {
	if (songInfo.style.visibility === "hidden") {
		songInfo.style.visibility = "visible";
	}
	else {
		songInfo.style.visibility = "hidden";
	}
	if (player1.style.bottom === "10px") {
		songInfoAlbum.src = "images/songs/hot_shot.jpg";
		songInfoTitle.innerHTML = "HOT SHOT";
		songInfoArtist.innerHTML = "Tokyo Machine";
	}
	if (player2.style.bottom === "10px") {
		songInfoAlbum.src = "images/songs/vg.jpg";
		songInfoTitle.innerHTML = "Virtual Gaming";
		songInfoArtist.innerHTML = "Naeleck, Hige Driver, Tokyo Machine";
	}
}
function exitInfo() {
	songInfo.style.visibility = "hidden";
}
function showGUI() {
	fullGUI.style.opacity = '1';
	fullGUI.style.transitionDelay = '0s';
	fullGUI.style.transitionDuration = '0.25s';
}
function hideGUI() {
	fullGUI.style.opacity = '0';
	fullGUI.style.transitionDelay = '1.5s';
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
        left = scrollX + viewportWidth - menuWidth - 5;
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

		if (currentAlbumSrc.includes('hot_shot.jpg')) {
			queue.unshift(track1);
		}
		else if (currentAlbumSrc.includes('vg.jpg')) {
			queue.unshift(track2);
		}
		else if (currentAlbumSrc.includes('slash.jpg')) {
			queue.unshift(track3);
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

		if (currentAlbumSrc.includes('hot_shot.jpg')) {
			queue.push(track1);
		}
		else if (currentAlbumSrc.includes('vg.jpg')) {
			queue.push(track2);
		}
		else if (currentAlbumSrc.includes('slash.jpg')) {
			queue.push(track3);
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
        const nextTrack = queue.shift();
        if (nextTrack === track1) play1();
        else if (nextTrack === track2) play2();
        else if (nextTrack === track3) play3();
    });
});

function showQueue() {
	console.log(queue);
}