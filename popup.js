function colorChange() {
    const newLink = document.getElementById("newLink");
    const computedColor = window.getComputedStyle(newLink).color;
    newLink.style.transitionDuration = "0.25s";

    if (computedColor === "rgb(255, 0, 0)") {
        newLink.style.color = "orange";
    } else if (computedColor === "rgb(255, 165, 0)") {
        newLink.style.color = "yellow";
    } else if (computedColor === "rgb(255, 255, 0)") {
        newLink.style.color = "green";
    } else if (computedColor === "rgb(0, 128, 0)") {
        newLink.style.color = "blue";
    } else if (computedColor === "rgb(0, 0, 255)") {
        newLink.style.color = "purple";
    } else if (computedColor === "rgb(128, 0, 128)") {
        newLink.style.color = "red";
    } else {
        newLink.style.color = "red";
    }
}

setInterval(colorChange, 450);

/*function hover() {
	document.getElementById("heaDer").style.filter = "blur(5px)";
	document.getElementById("hr1").style.filter = "blur(5px)";
	document.getElementById("nav1").style.filter = "blur(5px)";
	document.getElementById("nav2").style.filter = "blur(5px)";
	document.getElementById("nav3").style.filter = "blur(5px)";
	document.getElementById("nav4").style.filter = "blur(5px)";
	document.getElementById("hr2").style.filter = "blur(5px)";
	document.getElementById("h21").style.filter = "blur(5px)";
	document.getElementById("top3").style.filter = "blur(5px)";
	document.getElementById("player").style.filter = "blur(5px)";
	
	document.getElementById("heaDer").style.opacity = "0.25";
	document.getElementById("hr1").style.opacity = "0.5";
	document.getElementById("nav1").style.opacity = "0.5";
	document.getElementById("nav2").style.opacity = "0.5";
	document.getElementById("nav3").style.opacity = "0.5";
	document.getElementById("nav4").style.opacity = "0.5";
	document.getElementById("hr2").style.opacity = "0.5";
	document.getElementById("h21").style.opacity = "0.5";
	document.getElementById("top3").style.opacity = "0.5";
	document.getElementById("player").style.opacity = "0.5";
	
	document.getElementById("heaDer").style.transitionDuration = "0.5s";
	document.getElementById("hr1").style.transitionDuration = "0.5s";
	document.getElementById("nav1").style.transitionDuration = "0.5s";
	document.getElementById("nav2").style.transitionDuration = "0.5s";
	document.getElementById("nav3").style.transitionDuration = "0.5s";
	document.getElementById("nav4").style.transitionDuration = "0.5s";
	document.getElementById("hr2").style.transitionDuration = "0.5s";
	document.getElementById("h21").style.transitionDuration = "0.5s";
	document.getElementById("top3").style.transitionDuration = "0.5s";
	document.getElementById("player").style.transitionDuration = "0.5s";
	
	document.body.style.overflow = "hidden";
}
function leave() {
	document.getElementById("heaDer").style.filter = "none";
	document.getElementById("hr1").style.filter = "none";
	document.getElementById("nav1").style.filter = "none";
	document.getElementById("nav2").style.filter = "none";
	document.getElementById("nav3").style.filter = "none";
	document.getElementById("nav4").style.filter = "none";
	document.getElementById("hr2").style.filter = "none";
	document.getElementById("h21").style.filter = "none";
	document.getElementById("top3").style.filter = "none";
	document.getElementById("player").style.filter = "none";
	
	document.getElementById("heaDer").style.opacity = "1";
	document.getElementById("hr1").style.opacity = "1";
	document.getElementById("nav1").style.opacity = "1";
	document.getElementById("nav2").style.opacity = "1";
	document.getElementById("nav3").style.opacity = "1";
	document.getElementById("nav4").style.opacity = "1";
	document.getElementById("hr2").style.opacity = "1";
	document.getElementById("h21").style.opacity = "1";
	document.getElementById("top3").style.opacity = "1";
	document.getElementById("player").style.opacity = "1";
	
	document.getElementById("heaDer").style.transitionDuration = "0.5s";
	document.getElementById("hr1").style.transitionDuration = "0.5s";
	document.getElementById("nav1").style.transitionDuration = "0.5s";
	document.getElementById("nav2").style.transitionDuration = "0.5s";
	document.getElementById("nav3").style.transitionDuration = "0.5s";
	document.getElementById("nav4").style.transitionDuration = "0.5s";
	document.getElementById("hr2").style.transitionDuration = "0.5s";
	document.getElementById("h21").style.transitionDuration = "0.5s";
	document.getElementById("top3").style.transitionDuration = "0.5s";
	document.getElementById("player").style.transitionDuration = "0.5s";
	
	setTimeout(overFlow, 750);
}
function overFlow() {
	document.body.style.overflow = "visible";
}*/