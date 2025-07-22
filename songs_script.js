const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");
const player5 = document.getElementById("player5");
const player6 = document.getElementById("player6");
const player7 = document.getElementById("player7");
const player8 = document.getElementById("player8");
const player9 = document.getElementById("player9");
const player10 = document.getElementById("player10");
const player11 = document.getElementById("player11");
const player12 = document.getElementById("player12");
const player13 = document.getElementById("player13");
const player14 = document.getElementById("player14");
const player15 = document.getElementById("player15");
const player16 = document.getElementById("player16");
const player17 = document.getElementById("player17");
const player18 = document.getElementById("player18");
const player19 = document.getElementById("player19");
const player20 = document.getElementById("player20");
const player21 = document.getElementById("player21");
const player22 = document.getElementById("player22");
const player23 = document.getElementById("player23");
const player24 = document.getElementById("player24");

const visual1 = document.getElementById('visual1');
const visual2 = document.getElementById('visual2');
const visual3 = document.getElementById('visual3');
const visual4 = document.getElementById('visual4');
const visual5 = document.getElementById('visual5');
const visual6 = document.getElementById('visual6');
const visual7 = document.getElementById('visual7');
const visual8 = document.getElementById('visual8');
const visual9 = document.getElementById('visual9');
const visual10 = document.getElementById('visual10');
const visual11 = document.getElementById('visual11');
const visual12 = document.getElementById('visual12');
const visual13 = document.getElementById('visual13');
const visual14 = document.getElementById('visual14');
const visual15 = document.getElementById('visual15');
const visual16 = document.getElementById('visual16');
const visual17 = document.getElementById('visual17');
const visual18 = document.getElementById('visual18');
const visual19 = document.getElementById('visual19');
const visual20 = document.getElementById('visual20');
const visual21 = document.getElementById('visual21');
const visual22 = document.getElementById('visual22');
const visual23 = document.getElementById('visual23');
const visual24 = document.getElementById('visual24');

const alone = document.getElementById("alone");
const far_out = document.getElementById("far_out");
const crank = document.getElementById("crank");
const ghosty = document.getElementById("ghosty");
const immortal = document.getElementById("immortal");
const rattlesnake = document.getElementById("rattlesnake");
const ph4ntom = document.getElementById("ph4ntom");
const mortals = document.getElementById("mortals");
const knockout = document.getElementById("knockout");
const watch_out = document.getElementById("watch_out");
const hot_shot = document.getElementById("hot_shot");
const galactical = document.getElementById("galactical");
const vg = document.getElementById("vg");
const slash = document.getElementById("slash");
const powersound = document.getElementById("powersound");
const moshi = document.getElementById("moshi");
const stitches = document.getElementById("stitches");
const desperate = document.getElementById("desperate");
const heave_ho = document.getElementById("heave_ho");
const busted = document.getElementById("busted");
const danger = document.getElementById("danger");
const daba = document.getElementById("daba");
const kurse = document.getElementById("kurse");
const playM = document.getElementById("play");

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

const gridPhoto = document.getElementById('gridPhoto');
gridPhoto.src = 'images/selectedGrid.png';
const listPhoto = document.getElementById('listPhoto');

const bImage = document.getElementById('bImage');
const chompVideo = document.getElementById("chompVideo");
const crankVideo = document.getElementById("crankVideo");
const foVideo = document.getElementById("foVideo");
const woVideo = document.getElementById("woVideo");
const htVideo = document.getElementById("htVideo");
const gVideo = document.getElementById("gVideo");
const vgVideo = document.getElementById("vgVideo");
const stVideo = document.getElementById("stVideo");
const hhVideo = document.getElementById("hhVideo");
const buVideo = document.getElementById("buVideo");
const danVideo = document.getElementById("danVideo");
const playVideo = document.getElementById("playVideo");

const queue = [];

videoReset();

function videoReset() {
	bImage.style.opacity = '0';
	bImage.style.transitionDuration = '0.5s';
	chompVideo.style.opacity = "0";
	chompVideo.style.transitionDuration = "0.5s";
	chompVideo.pause();
	crankVideo.style.opacity = "0";
	crankVideo.style.transitionDuration = "0.5s";
	crankVideo.pause();
	foVideo.style.opacity = "0";
	foVideo.style.transitionDuration = "0.5s";
	foVideo.pause();
	woVideo.style.opacity = "0";
	woVideo.style.transitionDuration = "0.5s";
	woVideo.pause();
	htVideo.style.opacity = "0";
	htVideo.style.transitionDuration = "0.5s";
	htVideo.pause();
	gVideo.style.opacity = "0";
	gVideo.style.transitionDuration = "0.5s";
	gVideo.pause();
	vgVideo.style.opacity = "0";
	vgVideo.style.transitionDuration = "0.5s";
	vgVideo.pause();
	stVideo.style.opacity = "0";
	stVideo.style.transitionDuration = "0.5s";
	stVideo.pause();
	hhVideo.style.opacity = "0";
	hhVideo.style.transitionDuration = "0.5s";
	hhVideo.pause();
	buVideo.style.opacity = "0";
	buVideo.style.transitionDuration = "0.5s";
	buVideo.pause();
	danVideo.style.opacity = "0";
	danVideo.style.transitionDuration = "0.5s";
	danVideo.pause();
	playVideo.style.opacity = "0";
	playVideo.style.transitionDuration = "0.5s";
	playVideo.pause();

    visual1.style.visibility = 'hidden';
    visual2.style.visibility = 'hidden';
    visual3.style.visibility = 'hidden';
    visual4.style.visibility = 'hidden';
    visual5.style.visibility = 'hidden';
    visual6.style.visibility = 'hidden';
    visual7.style.visibility = 'hidden';
    visual8.style.visibility = 'hidden';
    visual9.style.visibility = 'hidden';
    visual10.style.visibility = 'hidden';
    visual11.style.visibility = 'hidden';
    visual12.style.visibility = 'hidden';
    visual13.style.visibility = 'hidden';
    visual14.style.visibility = 'hidden';
    visual15.style.visibility = 'hidden';
    visual16.style.visibility = 'hidden';
    visual17.style.visibility = 'hidden';
    visual18.style.visibility = 'hidden';
    visual19.style.visibility = 'hidden';
    visual20.style.visibility = 'hidden';
    visual21.style.visibility = 'hidden';
    visual22.style.visibility = 'hidden';
    visual23.style.visibility = 'hidden';
    visual24.style.visibility = 'hidden';
}

function reset() {
	alone.pause();
	alone.currentTime = 0;
	far_out.pause();
	far_out.volume = "0.5";
	far_out.currentTime = 0;
	crank.pause();
	crank.volume = "0.5";
	crank.currentTime = 0;
	ghosty.pause();
	ghosty.volume = "0.5";
	ghosty.currentTime = 0;
	immortal.pause();
	immortal.volume = "0.5";
	immortal.currentTime = 0;
	rattlesnake.pause();
	rattlesnake.volume = "0.5";
	rattlesnake.currentTime = 0;
	ph4ntom.pause();
	ph4ntom.volume = "0.5";
	ph4ntom.currentTime = 0;
	mortals.pause();
	mortals.volume = "0.5";
	mortals.currentTime = 0;
	knockout.pause();
	knockout.volume = "0.5";
	knockout.currentTime = 0;
	watch_out.pause();
	watch_out.volume = "0.5";
	watch_out.currentTime = 0;
	hot_shot.pause();
	hot_shot.volume = "0.5";
	hot_shot.currentTime = 0;
	galactical.pause();
	galactical.volume = "0.5";
	galactical.currentTime = 0;
	vg.pause();
	vg.currentTime = 0;
	slash.pause();
	slash.volume = "0.5";
	slash.currentTime = 0;
	powersound.pause();
	powersound.volume = "0.5";
	powersound.currentTime = 0;
	moshi.pause();
	moshi.volume = "0.5";
	moshi.currentTime = 0;
	stitches.pause();
	stitches.volume = "0.5";
	stitches.currentTime = 0;
	desperate.pause();
	desperate.volume = "0.5";
	desperate.currentTime = 0;
	heave_ho.pause();
	heave_ho.volume = "0.5";
	heave_ho.currentTime = 0;
	busted.pause();
	busted.volume = "0.5";
	busted.currentTime = 0;
	danger.pause();
	danger.volume = "0.5";
	danger.currentTime = 0;
	daba.pause();
	daba.volume = "0.5";
	daba.currentTime = 0;
	kurse.pause();
	kurse.volume = "0.5";
	kurse.currentTime = 0;
	playM.pause();
	playM.volume = "0.5";
	playM.currentTime = 0;
	
	videoReset();
	
	player1.style.bottom = "-10em";
	player1.style.transitionDuration = "0.2s";
	player2.style.bottom = "-10em";
	player2.style.transitionDuration = "0.2s";
	player3.style.bottom = "-10em";
	player3.style.transitionDuration = "0.2s";
	player4.style.bottom = "-10em";
	player4.style.transitionDuration = "0.2s";
	player5.style.bottom = "-10em";
	player5.style.transitionDuration = "0.2s";
	player6.style.bottom = "-10em";
	player6.style.transitionDuration = "0.2s";
	player7.style.bottom = "-10em";
	player7.style.transitionDuration = "0.2s";
	player8.style.bottom = "-10em";
	player8.style.transitionDuration = "0.2s";
	player9.style.bottom = "-10em";
	player9.style.transitionDuration = "0.2s";
	player10.style.bottom = "-10em";
	player10.style.transitionDuration = "0.2s";
	player11.style.bottom = "-10em";
	player11.style.transitionDuration = "0.2s";
	player12.style.bottom = "-10em";
	player12.style.transitionDuration = "0.2s";
	player13.style.bottom = "-10em";
	player13.style.transitionDuration = "0.2s";
	player14.style.bottom = "-10em";
	player14.style.transitionDuration = "0.2s";
	player15.style.bottom = "-10em";
	player15.style.transitionDuration = "0.2s";
	player16.style.bottom = "-10em";
	player16.style.transitionDuration = "0.2s";
	player17.style.bottom = "-10em";
	player17.style.transitionDuration = "0.2s";
	player18.style.bottom = "-10em";
	player18.style.transitionDuration = "0.2s";
	player19.style.bottom = "-10em";
	player19.style.transitionDuration = "0.2s";
	player20.style.bottom = "-10em";
	player20.style.transitionDuration = "0.2s";
	player21.style.bottom = "-10em";
	player21.style.transitionDuration = "0.2s";
	player22.style.bottom = "-10em";
	player22.style.transitionDuration = "0.2s";
	player23.style.bottom = "-10em";
	player23.style.transitionDuration = "0.2s";
	player24.style.bottom = "-10em";
	player24.style.transitionDuration = "0.2s";
}

function play1() {
	songInfoAlbum.src = "images/songs/alone.jpg";
	songInfoTitle.innerHTML = "Alone";
	songInfoArtist.innerHTML = "Marshmello";

	reset();
	
	bImage.src = 'images/songs/alone.jpg';
	bImage.style.transitionDuration = "1s";
	bImage.style.opacity = '0.25';
	
	player1.style.transitionDuration = "0.2s";
	player1.style.bottom = "10px";
	alone.play();
	alone.currentTime = 0;
    visual1.style.visibility = 'visible';

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
	songInfoAlbum.src = "images/songs/far_out.jpg";
	songInfoTitle.innerHTML = "FAR OUT - VIP";
	songInfoArtist.innerHTML = "Tokyo Machine";

	reset();
	
	foVideo.play();
	foVideo.style.opacity = "0.25";
	foVideo.style.transitionDuration = "1s";
	
	player2.style.transitionDuration = "0.2s";
	player2.style.bottom = "10px";
	far_out.play();
	far_out.currentTime = 0;
    visual2.style.visibility = 'visible';

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
	songInfoAlbum.src = "images/songs/crank.jpg";
	songInfoTitle.innerHTML = "CRANK";
	songInfoArtist.innerHTML = "CHOMPO & Tokyo Machine";

	reset();
	
	crankVideo.play();
	crankVideo.style.opacity = "0.25";
	crankVideo.style.transitionDuration = "1s";
	
	player3.style.transitionDuration = "0.2s";
	player3.style.bottom = "10px";
	crank.play();
	crank.currentTime = 0;
    visual3.style.visibility = 'visible';

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
function play4() {
	songInfoAlbum.src = "images/songs/chompoiii.jpg";
	songInfoTitle.innerHTML = "GHOSTY";
	songInfoArtist.innerHTML = "CHOMPO, Tokyo Machine & Boom Kitty";

	reset();
	
	chompVideo.play();
	chompVideo.style.opacity = "0.25";
	chompVideo.style.transitionDuration = "1s";
	
	player4.style.transitionDuration = "0.2s";
	player4.style.bottom = "10px";
	ghosty.play();
	ghosty.currentTime = 0;
    visual4.style.visibility = 'visible';

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
function play5() {
	songInfoAlbum.src = "images/songs/immortal.jpg";
	songInfoTitle.innerHTML = "Immortal";
	songInfoArtist.innerHTML = "Slippy";

	reset();
	
	bImage.src = 'images/songs/immortal.jpg';
	bImage.style.transitionDuration = "1s";
	bImage.style.opacity = '0.25';
	
	player5.style.transitionDuration = "0.2s";
	player5.style.bottom = "10px";
	immortal.play();
	immortal.currentTime = 0;
    visual5.style.visibility = 'visible';

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
function play6() {
	songInfoAlbum.src = "images/songs/rattlesnake.jpg";
	songInfoTitle.innerHTML = "Rattlesnake";
	songInfoArtist.innerHTML = "Rogue";

	reset();
	
	bImage.src = 'images/songs/rattlesnake.jpg';
	bImage.style.transitionDuration = "1s";
	bImage.style.opacity = '0.25';
	
	player6.style.transitionDuration = "0.2s";
	player6.style.bottom = "10px";
	rattlesnake.play();
	rattlesnake.currentTime = 0;
    visual6.style.visibility = 'visible';

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
function play7() {
	songInfoAlbum.src = "images/songs/chompoiii.jpg";
	songInfoTitle.innerHTML = "PH4NTOM";
	songInfoArtist.innerHTML = "CHOMPO and HAUNTY";

	reset();
	
	chompVideo.play();
	chompVideo.style.opacity = "0.25";
	chompVideo.style.transitionDuration = "1s";
	
	player7.style.transitionDuration = "0.2s";
	player7.style.bottom = "10px";
	ph4ntom.play();
	ph4ntom.currentTime = 0;
    visual7.style.visibility = 'visible';

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
function play8() {
	songInfoAlbum.src = "images/songs/mortals.jpg";
	songInfoTitle.innerHTML = "Mortals (Tokyo Machine & Boom Kitty Remix)";
	songInfoArtist.innerHTML = "Warriyo, Tokyo Machine & Boom Kitty";
	
	reset();
	
	bImage.src = 'images/songs/mortals.jpg';
	bImage.style.transitionDuration = "1s";
	bImage.style.opacity = '0.25';
	
	player8.style.transitionDuration = "0.2s";
	player8.style.bottom = "10px";
	mortals.play();
	mortals.currentTime = 0;
    visual8.style.visibility = 'visible';

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
function play9() {
	songInfoAlbum.src = "images/songs/chompoiii.jpg";
	songInfoTitle.innerHTML = "KNOCKOUT";
	songInfoArtist.innerHTML = "CHOMPO, Tokyo Machine & MDK";

	reset();
	
	chompVideo.play();
	chompVideo.style.opacity = "0.25";
	chompVideo.style.transitionDuration = "1s";
	
	player9.style.transitionDuration = "0.2s";
	player9.style.bottom = "10px";
	knockout.play();
	knockout.currentTime = 0;
    visual9.style.visibility = 'visible';

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
function play10() {
	songInfoAlbum.src = "images/songs/watch_out.jpg";
	songInfoTitle.innerHTML = "WATCH OUT!";
	songInfoArtist.innerHTML = "Tokyo Machine & Guy Arthur";

	reset();
	
	woVideo.play();
	woVideo.style.opacity = "0.25";
	woVideo.style.transitionDuration = "1s";
	
	player10.style.transitionDuration = "0.2s";
	player10.style.bottom = "10px";
	watch_out.play();
	watch_out.currentTime = 0;
    visual10.style.visibility = 'visible';

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
function play11() {
	songInfoAlbum.src = "images/songs/hot_shot.jpg";
	songInfoTitle.innerHTML = "HOT SHOT";
	songInfoArtist.innerHTML = "Tokyo Machine";

	reset();
	
	htVideo.play();
	htVideo.style.opacity = "0.25";
	htVideo.style.transitionDuration = "1s";
	
	player11.style.transitionDuration = "0.2s";
	player11.style.bottom = "10px";
	hot_shot.play();
	hot_shot.currentTime = 0;
    visual11.style.visibility = 'visible';

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
function play12() {
	songInfoAlbum.src = "images/songs/galactical.jpg";
	songInfoTitle.innerHTML = "GALACTICAL";
	songInfoArtist.innerHTML = "Tokyo Machine";

	reset();
	
	gVideo.play();
	gVideo.style.opacity = "0.25";
	gVideo.style.transitionDuration = "1s";
	
	player12.style.transitionDuration = "0.2s";
	player12.style.bottom = "10px";
	galactical.play();
	galactical.currentTime = 0;
    visual12.style.visibility = 'visible';

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
function play13() {
	songInfoAlbum.src = "images/songs/vg.jpg";
	songInfoTitle.innerHTML = "Virtual Gaming (Tokyo Machine Remix)";
	songInfoArtist.innerHTML = "Naeleck, Hige Driver, Tokyo Machine";

	reset();
	
	vgVideo.play();
	vgVideo.style.opacity = "0.25";
	vgVideo.style.transitionDuration = "1s";
	
	player13.style.transitionDuration = "0.2s";
	player13.style.bottom = "10px";
	vg.play();
	vg.currentTime = 0;
    visual13.style.visibility = 'visible';

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
function play14() {
	songInfoAlbum.src = "images/songs/slash.jpg";
	songInfoTitle.innerHTML = "SLASH";
	songInfoArtist.innerHTML = "Tokyo Machine";

	reset();
	
	bImage.src = 'images/songs/slash.jpg';
	bImage.style.transitionDuration = "1s";
	bImage.style.opacity = '0.25';
	
	player14.style.transitionDuration = "0.2s";
	player14.style.bottom = "10px";
	slash.play();
	slash.currentTime = 0;
    visual14.style.visibility = 'visible';

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
function play15() {
	songInfoAlbum.src = "images/songs/powersound.jpg";
	songInfoTitle.innerHTML = "POWERSOUND";
	songInfoArtist.innerHTML = "ELEPS";

	reset();
	
	bImage.src = 'images/songs/powersound.jpg';
	bImage.style.transitionDuration = "1s";
	bImage.style.opacity = '0.25';
	
	player15.style.transitionDuration = "0.2s";
	player15.style.bottom = "10px";
	powersound.play();
	powersound.currentTime = 0;
    visual15.style.visibility = 'visible';

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
function play16() {
	songInfoAlbum.src = "images/songs/moshi.jpg";
	songInfoTitle.innerHTML = "MOSHI";
	songInfoArtist.innerHTML = "Tokyo Machine";

	reset();

	bImage.src = 'images/songs/moshi.jpg';
	bImage.style.transitionDuration = "1s";
	bImage.style.opacity = '0.25';
	
	player16.style.transitionDuration = "0.2s";
	player16.style.bottom = "10px";
	moshi.play();
	moshi.currentTime = 0;
    visual16.style.visibility = 'visible';

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
function play17() {
	songInfoAlbum.src = "images/songs/stitches.jpg";
	songInfoTitle.innerHTML = "Stitches";
	songInfoArtist.innerHTML = "Tokyo Machine & Guy Arthur";

	reset();
	
	stVideo.play();
	stVideo.style.opacity = "0.25";
	stVideo.style.transitionDuration = "1s";
	
	player17.style.transitionDuration = "0.2s";
	player17.style.bottom = "10px";
	stitches.play();
	stitches.currentTime = 0;
    visual17.style.visibility = 'visible';

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
function play18() {
	songInfoAlbum.src = "images/songs/desperate.jpg";
	songInfoTitle.innerHTML = "Desperate";
	songInfoArtist.innerHTML = "NEFFIX & Tokyo Machine";

	reset();

	bImage.src = 'images/songs/desperate.jpg';
	bImage.style.transitionDuration = "1s";
	bImage.style.opacity = '0.25';
	
	player18.style.transitionDuration = "0.2s";
	player18.style.bottom = "10px";
	desperate.play();
	desperate.currentTime = 0;
    visual18.style.visibility = 'visible';

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
function play19() {
	songInfoAlbum.src = "images/songs/heave_ho.jpg";
	songInfoTitle.innerHTML = "Heave Ho";
	songInfoArtist.innerHTML = "Boom Kitty & Teminite";

	reset();
	
	hhVideo.play();
	hhVideo.style.opacity = "0.25";
	hhVideo.style.transitionDuration = "1s";
	hhVideo.currentTime = 0;
	
	player19.style.bottom = "10px";
	player19.style.transitionDuration = "0.2s";
	heave_ho.play();
	heave_ho.currentTime = 0;
    visual19.style.visibility = 'visible';

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
function play20() {
	songInfoAlbum.src = "images/songs/busted.jpg";
	songInfoTitle.innerHTML = "BUSTED";
	songInfoArtist.innerHTML = "Tokyo Machine, Boom Kitty & Teminite";

	reset();
	
	buVideo.play();
	buVideo.style.opacity = "0.25";
	buVideo.style.transitionDuration = "1s";
	buVideo.currentTime = 0;
	
	player20.style.bottom = "10px";
	player20.style.transitionDuration = "0.2s";
	busted.play();
	busted.currentTime = 0;
    visual20.style.visibility = 'visible';

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
function play21() {
	songInfoAlbum.src = "images/songs/danger.jpg";
	songInfoTitle.innerHTML = "Danger";
	songInfoArtist.innerHTML = "Teminite & Boom Kitty";

	reset();
	
	danVideo.play();
	danVideo.style.opacity = "0.25";
	danVideo.style.transitionDuration = "1s";
	danVideo.currentTime = 0;
	
	player21.style.bottom = "10px";
	player21.style.transitionDuration = "0.2s";
	danger.play();
	danger.currentTime = 0;
    visual21.style.visibility = 'visible';

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
function play22() {
	songInfoAlbum.src = "images/songs/dabadabadabadaba.jpg";
	songInfoTitle.innerHTML = "DABADABADABADABA";
	songInfoArtist.innerHTML = "Excision & Dion Timmer";

	reset();

	bImage.src = 'images/songs/dabadabadabadaba.jpg';
	bImage.style.transitionDuration = "1s";
	bImage.style.opacity = '0.25';
	
	player22.style.bottom = "10px";
	player22.style.transitionDuration = "0.2s";
	daba.play();
	daba.currentTime = 0;
    visual22.style.visibility = 'visible';

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
function play23() {
	songInfoAlbum.src = "images/songs/kurse.jpg";
	songInfoTitle.innerHTML = "KURSE OF KHARTOUM";
	songInfoArtist.innerHTML = "Boom Kitty, Tanger, & CHOMPO";

	reset();

	bImage.src = 'images/songs/kurse.jpg';
	bImage.style.transitionDuration = "1s";
	bImage.style.opacity = '0.25';
	
	player23.style.bottom = "10px";
	player23.style.transitionDuration = "0.2s";
	kurse.play();
	kurse.currentTime = 0;
    visual23.style.visibility = 'visible';

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
function play24() {
	songInfoAlbum.src = "images/songs/play.jpg";
	songInfoTitle.innerHTML = "PLAY (VIP)";
	songInfoArtist.innerHTML = "Tokyo Machine";

	reset();
	
	playVideo.play();
	playVideo.style.opacity = "0.25";
	playVideo.style.transitionDuration = "1s";
	playVideo.currentTime = 0;
	
	player24.style.bottom = "10px";
	player24.style.transitionDuration = "0.2s";
	playM.play();
	playM.currentTime = 0;
    visual24.style.visibility = 'visible';

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
	alone.pause();
	far_out.pause();
	crank.pause();
	ghosty.pause();
	immortal.pause();
	rattlesnake.pause();
	ph4ntom.pause();
	mortals.pause();
	knockout.pause();
	watch_out.pause();
	hot_shot.pause();
	galactical.pause();
	vg.pause();
	slash.pause();
	powersound.pause();
	moshi.pause();
	stitches.pause();
	desperate.pause();
	heave_ho.pause();
	busted.pause();
	danger.pause();
	daba.pause();
	kurse.pause();
	playM.pause();
}
function dismissPlayer() {
	queue.length = 0;
	reset();
}

function full() {
	document.body.style.overflow = "hidden";
	if (player1.style.bottom === "10px" || player5.style.bottom === "10px" || player6.style.bottom === "10px" || player8.style.bottom === "10px" || player14.style.bottom === "10px" || player15.style.bottom === "10px" || player16.style.bottom === "10px" || player18.style.bottom === "10px" || player22.style.bottom === "10px" || player23.style.bottom === "10px") {
		bImage.style.opacity = "1";
		bImage.style.zIndex = "1000";
		bImage.style.transitionDuration = "0s";
	}
	if (player2.style.bottom === "10px") {
		foVideo.style.opacity = "1";
		foVideo.style.zIndex = "1000";
		foVideo.style.transitionDuration = "0s";
	}
	if (player3.style.bottom === "10px") {
		crankVideo.style.opacity = "1";
		crankVideo.style.zIndex = "1000";
		crankVideo.style.transitionDuration = "0s";
	}
	if (player4.style.bottom === "10px") {
		chompVideo.style.opacity = "1";
		chompVideo.style.zIndex = "1000";
		chompVideo.style.transitionDuration = "0s";
	}
	if (player7.style.bottom === "10px") {
		chompVideo.style.opacity = "1";
		chompVideo.style.zIndex = "1000";
		chompVideo.style.transitionDuration = "0s";
	}
	if (player9.style.bottom === "10px") {
		chompVideo.style.opacity = "1";
		chompVideo.style.zIndex = "1000";
		chompVideo.style.transitionDuration = "0s";
	}
	if (player10.style.bottom === "10px") {
		woVideo.style.opacity = "1";
		woVideo.style.zIndex = "1000";
		woVideo.style.transitionDuration = "0s";
	}
	if (player11.style.bottom === "10px") {
		htVideo.style.opacity = "1";
		htVideo.style.zIndex = "1000";
		htVideo.style.transitionDuration = "0s";
	}
	if (player12.style.bottom === "10px") {
		gVideo.style.opacity = "1";
		gVideo.style.zIndex = "1000";
		gVideo.style.transitionDuration = "0s";
	}
	if (player13.style.bottom === "10px") {
		vgVideo.style.opacity = "1";
		vgVideo.style.zIndex = "1000";
		vgVideo.style.transitionDuration = "0s";
	}
	if (player17.style.bottom === "10px") {
		stVideo.style.opacity = "1";
		stVideo.style.zIndex = "1000";
		stVideo.style.transitionDuration = "0s";
	}
	if (player19.style.bottom === "10px") {
		hhVideo.style.opacity = "1";
		hhVideo.style.zIndex = "1000";
		hhVideo.style.transitionDuration = "0s";
	}
	if (player20.style.bottom === "10px") {
		buVideo.style.opacity = "1";
		buVideo.style.zIndex = "1000";
		buVideo.style.transitionDuration = "0s";
	}
	if (player21.style.bottom === "10px") {
		danVideo.style.opacity = "1";
		danVideo.style.zIndex = "1000";
		danVideo.style.transitionDuration = "0s";
	}
	if (player24.style.bottom === "10px") {
		playVideo.style.opacity = "1";
		playVideo.style.zIndex = "1000";
		playVideo.style.transitionDuration = "0s";
	}
	fullGUI.style.bottom = "10px";
	fullGUI.style.transitionDelay = "0s";
	fullGUI.style.transitionDuration = "0.2s";
	songInfo.style.visibility = "hidden";
	
}
function exitFull() {
	document.body.style.overflow = "visible";
	if (player1.style.bottom === "10px" || player5.style.bottom === "10px" || player6.style.bottom === "10px" || player8.style.bottom === "10px" || player14.style.bottom === "10px" || player15.style.bottom === "10px" || player16.style.bottom === "10px" || player18.style.bottom === "10px" || player22.style.bottom === "10px" || player23.style.bottom === "10px") {
		bImage.style.opacity = "0.25";
		bImage.style.zIndex = "-1000";
		bImage.style.transitionDuration = "0s";
	} else if (player2.style.bottom === "10px") {
		foVideo.style.opacity = "0.25";
		foVideo.style.zIndex = "-1000";
		foVideo.style.transitionDuration = "0s";
		foVideo.play();
	} else if (player3.style.bottom === "10px") {
		crankVideo.style.opacity = "0.25";
		crankVideo.style.zIndex = "-1000";
		crankVideo.style.transitionDuration = "0s";
		crankVideo.play();
	} else if (player4.style.bottom === "10px") {
		chompVideo.style.opacity = "0.25";
		chompVideo.style.zIndex = "-1000";
		chompVideo.style.transitionDuration = "0s";
		chompVideo.play();
	} else if (player7.style.bottom === "10px") {
		chompVideo.style.opacity = "0.25";
		chompVideo.style.zIndex = "-1000";
		chompVideo.style.transitionDuration = "0s";
		chompVideo.play();
	} else if (player9.style.bottom === "10px") {
		chompVideo.style.opacity = "0.25";
		chompVideo.style.zIndex = "-1000";
		chompVideo.style.transitionDuration = "0s";
		chompVideo.play();
	} else if (player10.style.bottom === "10px") {
		woVideo.style.opacity = "0.25";
		woVideo.style.zIndex = "-1000";
		woVideo.style.transitionDuration = "0s";
		woVideo.play();
	} else if (player11.style.bottom === "10px") {
		htVideo.style.opacity = "0.25";
		htVideo.style.zIndex = "-1000";
		htVideo.style.transitionDuration = "0s";
		htVideo.play();
	} else if (player12.style.bottom === "10px") {
		gVideo.style.opacity = "0.25";
		gVideo.style.zIndex = "-1000";
		gVideo.style.transitionDuration = "0s";
		gVideo.play();
	} else if (player13.style.bottom === "10px") {
		vgVideo.style.opacity = "0.25";
		vgVideo.style.zIndex = "-1000";
		vgVideo.style.transitionDuration = "0s";
		vgVideo.play();
	} else if (player17.style.bottom === "10px") {
		stVideo.style.opacity = "0.25";
		stVideo.style.zIndex = "-1000";
		stVideo.style.transitionDuration = "0s";
		stVideo.play();
	} else if (player19.style.bottom === "10px") {
		hhVideo.style.opacity = "0.25";
		hhVideo.style.zIndex = "-1000";
		hhVideo.style.transitionDuration = "0s";
		hhVideo.play();
	} else if (player20.style.bottom === "10px") {
		buVideo.style.opacity = "0.25";
		buVideo.style.zIndex = "-1000";
		buVideo.style.transitionDuration = "0s";
		buVideo.play();
	} else if (player21.style.bottom === "10px") {
		danVideo.style.opacity = "0.25";
		danVideo.style.zIndex = "-1000";
		danVideo.style.transitionDuration = "0s";
		danVideo.play();
	} else if (player24.style.bottom === "10px") {
		playVideo.style.opacity = "0.25";
		playVideo.style.zIndex = "-1000";
		playVideo.style.transitionDuration = "0s";
		playVideo.play();
	}
	fullGUI.style.bottom = "-10em";
	fullGUI.style.transitionDuration = "0.2s";
	songInfo.style.visibility = "hidden";
}
function togglePause() {
	if (player1.style.bottom === "10px") {
		if (alone.paused !== true) {
			alone.pause();
			
		} else {
			alone.play();
			
		}
	} else if (player2.style.bottom === "10px") {
		if (far_out.paused !== true) {
			foVideo.pause();
			far_out.pause();
			
		} else {
			foVideo.play();
			far_out.play();
			
		}
	} else if (player3.style.bottom === "10px") {
		if (crank.paused !== true) {
			crankVideo.pause();
			crank.pause();
			
		} else {
			crankVideo.play();
			crank.play();
			
		}
	} else if (player4.style.bottom === "10px") {
		if (ghosty.paused !== true) {
			chompVideo.pause();
			ghosty.pause();
			
		} else {
			chompVideo.play();
			ghosty.play();
			
		}
	} else if (player5.style.bottom === "10px") {
		if (immortal.paused !== true) {
			immortal.pause();
			
		} else {
			immortal.play();
			
		}
	} else if (player6.style.bottom === "10px") {
		if (rattlesnake.paused !== true) {
			rattlesnake.pause();
			
		} else {
			rattlesnake.play();
			
		}
	} else if (player7.style.bottom === "10px") {
		if (ph4ntom.paused !== true) {
			chompVideo.pause();
			ph4ntom.pause();
			
		} else {
			chompVideo.play();
			ph4ntom.play();
			
		}
	} else if (player8.style.bottom === "10px") {
		if (mortals.paused !== true) {
			mortals.pause();
			
		} else {
			mortals.play();
			
		}
	} else if (player9.style.bottom === "10px") {
		if (knockout.paused !== true) {
			chompVideo.pause();
			knockout.pause();
			
		} else {
			chompVideo.play();
			knockout.play();
			
		}
	} else if (player10.style.bottom === "10px") {
		if (watch_out.paused !== true) {
			woVideo.pause();
			watch_out.pause();
			
		} else {
			woVideo.play();
			watch_out.play();
			
		}
	} else if (player11.style.bottom === "10px") {
		if (hot_shot.paused !== true) {
			htVideo.pause();
			hot_shot.pause();
			
		} else {
			htVideo.play();
			hot_shot.play();
			
		}
	} else if (player12.style.bottom === "10px") {
		if (galactical.paused !== true) {
			gVideo.pause();
			galactical.pause();
			
		} else {
			gVideo.play();
			galactical.play();
			
		}
	} else if (player13.style.bottom === "10px") {
		if (vg.paused !== true) {
			vgVideo.pause();
			vg.pause();
			
		} else {
			vgVideo.play();
			vg.play();
			
		}
	} else if (player14.style.bottom === "10px") {
		if (slash.paused !== true) {
			slash.pause();
			
		} else {
			slash.play();
			
		}
	} else if (player15.style.bottom === "10px") {
		if (powersound.paused !== true) {
			powersound.pause();
			
		} else {
			powersound.play();
			
		}
	} else if (player16.style.bottom === "10px") {
		if (moshi.paused !== true) {
			moshi.pause();
			
		} else {
			moshi.play();
			
		}
	} else if (player17.style.bottom === "10px") {
		if (stitches.paused !== true) {
			stVideo.pause();
			stitches.pause();
			
		} else {
			stVideo.play();
			stitches.play();
			
		}
	} else if (player18.style.bottom === "10px") {
		if (desperate.paused !== true) {
			desperate.pause();
			
		} else {
			desperate.play();
			
		}
	} else if (player19.style.bottom === "10px") {
		if (heave_ho.paused !== true) {
			hhVideo.pause();
			heave_ho.pause();
			
		} else {
			hhVideo.play();
			heave_ho.play();
			
		}
	} else if (player20.style.bottom === "10px") {
		if (busted.paused !== true) {
			buVideo.pause();
			busted.pause();
			
		} else {
			buVideo.play();
			busted.play();
			
		}
	} else if (player21.style.bottom === "10px") {
		if (danger.paused !== true) {
			danVideo.pause();
			danger.pause();
			
		} else {
			danVideo.play();
			danger.play();
			
		}
	} else if (player22.style.bottom === "10px") {
		if (daba.paused !== true) {
			daba.pause();
			
		} else {
			daba.play();
			
		}
	} else if (player23.style.bottom === "10px") {
		if (kurse.paused !== true) {
			kurse.pause();
			
		} else {
			kurse.play();
			
		}
	} else if (player24.style.bottom === "10px") {
		if (playM.paused !== true) {
			playVideo.pause();
			playM.pause();
			
		} else {
			playVideo.play();
			playM.play();
			
		}
	}

	if (pauseIcon.src.includes("pause.png")) {
		pauseIcon.src = "images/play.png";
	} else {
		pauseIcon.src="images/pause.png";
	}
}
function ToggleInfo() {
	if (songInfo.style.visibility === "hidden") {
		songInfo.style.visibility = "visible";
	}
	else {
		songInfo.style.visibility = "hidden";
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
/*window.addEventListener('scroll', function() {
	customMenu.style.display = 'none';
});
window.addEventListener('resize', function() {
	customMenu.style.display = 'none';
});*/

function playNext() {
	customMenu.style.display = 'none';
	notify.style.top = '-20em';
	notify.style.transitionDuration = '0.5s';
	setTimeout(function() {
		if (!currentAlbumSrc) return;

		if (currentAlbumSrc.includes('alone.jpg')) queue.unshift(alone);
		else if (currentAlbumSrc.includes('far_out.jpg')) queue.unshift(far_out);
		else if (currentAlbumSrc.includes('crank.jpg')) queue.unshift(crank);
		else if (currentAlbumSrc.includes('ghosty.jpg')) queue.unshift(ghosty);
		else if (currentAlbumSrc.includes('immortal.jpg')) queue.unshift(immortal);
		else if (currentAlbumSrc.includes('rattlesnake.jpg')) queue.unshift(rattlesnake);
		else if (currentAlbumSrc.includes('ph4ntom.jpg')) queue.unshift(ph4ntom);
		else if (currentAlbumSrc.includes('mortals.jpg')) queue.unshift(mortals);
		else if (currentAlbumSrc.includes('knockout.jpg')) queue.unshift(knockout);
		else if (currentAlbumSrc.includes('watch_out.jpg')) queue.unshift(watch_out);
		else if (currentAlbumSrc.includes('hot_shot.jpg')) queue.unshift(hot_shot);
		else if (currentAlbumSrc.includes('galactical.jpg')) queue.unshift(galactical);
		else if (currentAlbumSrc.includes('vg.jpg')) queue.unshift(vg);
		else if (currentAlbumSrc.includes('slash.jpg')) queue.unshift(slash);
		else if (currentAlbumSrc.includes('powersound.jpg')) queue.unshift(powersound);
		else if (currentAlbumSrc.includes('moshi.jpg')) queue.unshift(moshi);
		else if (currentAlbumSrc.includes('stitches.jpg')) queue.unshift(stitches);
		else if (currentAlbumSrc.includes('desperate.jpg')) queue.unshift(desperate);
		else if (currentAlbumSrc.includes('heave_ho.jpg')) queue.unshift(heave_ho);
		else if (currentAlbumSrc.includes('busted.jpg')) queue.unshift(busted);
		else if (currentAlbumSrc.includes('danger.jpg')) queue.unshift(danger);
		else if (currentAlbumSrc.includes('dabadabadabadaba.jpg')) queue.unshift(daba);
		else if (currentAlbumSrc.includes('kurse.jpg')) queue.unshift(kurse);
		else if (currentAlbumSrc.includes('play.jpg')) queue.unshift(playM);
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

		if (currentAlbumSrc.includes('alone.jpg')) queue.push(alone);
		else if (currentAlbumSrc.includes('far_out.jpg')) queue.push(far_out);
		else if (currentAlbumSrc.includes('crank.jpg')) queue.push(crank);
		else if (currentAlbumSrc.includes('ghosty.jpg')) queue.push(ghosty);
		else if (currentAlbumSrc.includes('immortal.jpg')) queue.push(immortal);
		else if (currentAlbumSrc.includes('rattlesnake.jpg')) queue.push(rattlesnake);
		else if (currentAlbumSrc.includes('ph4ntom.jpg')) queue.push(ph4ntom);
		else if (currentAlbumSrc.includes('mortals.jpg')) queue.push(mortals);
		else if (currentAlbumSrc.includes('knockout.jpg')) queue.push(knockout);
		else if (currentAlbumSrc.includes('watch_out.jpg')) queue.push(watch_out);
		else if (currentAlbumSrc.includes('hot_shot.jpg')) queue.push(hot_shot);
		else if (currentAlbumSrc.includes('galactical.jpg')) queue.push(galactical);
		else if (currentAlbumSrc.includes('vg.jpg')) queue.push(vg);
		else if (currentAlbumSrc.includes('slash.jpg')) queue.push(slash);
		else if (currentAlbumSrc.includes('powersound.jpg')) queue.push(powersound);
		else if (currentAlbumSrc.includes('moshi.jpg')) queue.push(moshi);
		else if (currentAlbumSrc.includes('stitches.jpg')) queue.push(stitches);
		else if (currentAlbumSrc.includes('desperate.jpg')) queue.push(desperate);
		else if (currentAlbumSrc.includes('heave_ho.jpg')) queue.push(heave_ho);
		else if (currentAlbumSrc.includes('busted.jpg')) queue.push(busted);
		else if (currentAlbumSrc.includes('danger.jpg')) queue.push(danger);
		else if (currentAlbumSrc.includes('dabadabadabadaba.jpg')) queue.push(daba);
		else if (currentAlbumSrc.includes('kurse.jpg')) queue.push(kurse);
		else if (currentAlbumSrc.includes('play.jpg')) queue.push(playM);
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
    alone, far_out, crank, ghosty, immortal, rattlesnake, ph4ntom, mortals, knockout, watch_out,
    hot_shot, galactical, vg, slash, powersound, moshi, stitches, desperate, heave_ho, busted, danger, daba, kurse, playM
];

allTracks.forEach(track => {
    track.addEventListener('ended', function() {
        exitFull();
        playNextOnQueue();
    });
});

function showQueue() {
	console.log(queue);
}

function grid() {
	let styleLink1 = document.querySelector('link[rel="stylesheet"][href="list.css"]');

	if (styleLink1) {
		styleLink1.href = 'styles.css';
		gridPhoto.src = 'images/selectedGrid.png';
		listPhoto.src = 'images/list.png';
	}
}
function list() {
	let styleLink2 = document.querySelector('link[rel="stylesheet"][href="styles.css"]');
	if (styleLink2) {
		styleLink2.href = 'list.css';
		listPhoto.src = 'images/selectedList.png';
		gridPhoto.src = 'images/grid.png';
	}
}

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
        far_out, crank, ghosty, immortal, rattlesnake, ph4ntom, mortals, knockout, watch_out,
        hot_shot, galactical, vg, slash, powersound, moshi, stitches, desperate, heave_ho,
        busted, danger, daba, kurse, playM
    );
	play1();
}
function shuffleAll() {
    const tracksToShuffle = allTracks;

    for (let i = tracksToShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tracksToShuffle[i], tracksToShuffle[j]] = [tracksToShuffle[j], tracksToShuffle[i]];
    }

    queue.length = 0;
    queue.push(...tracksToShuffle);

	playNextOnQueue();
}
function playNextOnQueue() {
	const nextTrack = queue.shift();
    if (nextTrack === alone) play1();
    else if (nextTrack === far_out) play2();
    else if (nextTrack === crank) play3();
    else if (nextTrack === ghosty) play4();
    else if (nextTrack === immortal) play5();
    else if (nextTrack === rattlesnake) play6();
    else if (nextTrack === ph4ntom) play7();
    else if (nextTrack === mortals) play8();
    else if (nextTrack === knockout) play9();
    else if (nextTrack === watch_out) play10();
    else if (nextTrack === hot_shot) play11();
    else if (nextTrack === galactical) play12();
    else if (nextTrack === vg) play13();
    else if (nextTrack === slash) play14();
    else if (nextTrack === powersound) play15();
    else if (nextTrack === moshi) play16();
    else if (nextTrack === stitches) play17();
    else if (nextTrack === desperate) play18();
    else if (nextTrack === heave_ho) play19();
    else if (nextTrack === busted) play20();
	else if (nextTrack === danger) play21();
	else if (nextTrack === daba) play22();
	else if (nextTrack === kurse) play23();
	else if (nextTrack === playM) play24();
}
function rewind() {
	if (player1.style.bottom === '10px') alone.currentTime = '0';
    else if (player2.style.bottom === '10px') far_out.currentTime = '0';
    else if (player3.style.bottom === '10px') crank.currentTime = '0';
    else if (player4.style.bottom === '10px') ghosty.currentTime = '0';
    else if (player5.style.bottom === '10px') immortal.currentTime = '0';
    else if (player6.style.bottom === '10px') rattlesnake.currentTime = '0';
    else if (player7.style.bottom === '10px') ph4ntom.currentTime = '0';
    else if (player8.style.bottom === '10px') mortals.currentTime = '0';
    else if (player9.style.bottom === '10px') knockout.currentTime = '0';
    else if (player10.style.bottom === '10px') watch_out.currentTime = '0';
    else if (player11.style.bottom === '10px') hot_shot.currentTime = '0';
    else if (player12.style.bottom === '10px') galactical.currentTime = '0';
    else if (player13.style.bottom === '10px') vg.currentTime = '0';
    else if (player14.style.bottom === '10px') slash.currentTime = '0';
    else if (player15.style.bottom === '10px') powersound.currentTime = '0';
    else if (player16.style.bottom === '10px') moshi.currentTime = '0';
    else if (player17.style.bottom === '10px') stitches.currentTime = '0';
    else if (player18.style.bottom === '10px') desperate.currentTime = '0';
    else if (player19.style.bottom === '10px') heave_ho.currentTime = '0';
    else if (player20.style.bottom === '10px') busted.currentTime = '0';
	else if (player21.style.bottom === '10px') danger.currentTime = '0';
	else if (player22.style.bottom === '10px') daba.currentTime = '0';
	else if (player23.style.bottom === '10px') kurse.currentTime = '0';
	else if (player24.style.bottom === '10px') playM.currentTime = '0';
}

let mouseStopTimeout;

document.addEventListener('mousemove', function() {
	showGUI();
	document.querySelector('html').style.cursor = 'default';
	clearTimeout(mouseStopTimeout);
	if (songInfo.style.visibility !== 'visible' && fullGUI.style.bottom === '10px') {
		mouseStopTimeout = setTimeout(function() {
			hideGUI();
			document.querySelector('html').style.cursor = 'none';
		}, 1500);
	}
});

function bImageMove() {
    bImage.style.transitionDuration = '15s';
	bImage.style.bottom = '';
    bImage.style.top = '0';
    setTimeout(function() {
        bImage.style.transitionDuration = '15s';
		bImage.style.top = '';
        bImage.style.bottom = '0';
        setTimeout(bImageMove, 15000);
    }, 15000);
}

window.addEventListener('DOMContentLoaded', bImageMove);

document.addEventListener('keydown', function(event) {
	if (event.shiftKey && event.key === 'ArrowRight') {
		playNextOnQueue();
	}
});
document.addEventListener('keydown', function(event) {
	if (event.shiftKey && event.key === 'ArrowLeft') {
		rewind();
	}
});