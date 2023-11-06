document.addEventListener("DOMContentLoaded", function () {
    var play = document.getElementById("play");
	var slider = document.getElementById("slider");
	var mute = document.getElementById("mute");
	var slow = document.getElementById("slower");
	var speed = document.getElementById("faster");
	var info = document.getElementById("volume");
	var pause = document.getElementById("pause");
	var video = document.getElementById("player1");
	var skip = document.getElementById("skip");
	var oldbttn = document.getElementById("vintage");
	var ogbttn = document.getElementById("orig");


    video.autoplay = false;
    video.loop = false;

    play.addEventListener("click", function () {
        video.play();
        info.textContent = `${Math.round(video.volume * 100)}%`;
    });
    oldbttn.addEventListener("click", function () {
        video.classList.add("oldSchool");
    });
	
    ogbttn.addEventListener("click", function () {
        video.classList.remove("oldSchool");
    });
	slider.addEventListener("input", function () {
        video.volume = slider.value / 100;
        info.textContent = `${Math.round(video.volume * 100)}%`;
    });
	skip.addEventListener("click", function () {
        video.currentTime += 10;
        if (video.duration < video.currentTime) {
            video.currentTime = 0;
        }
        console.log(`Time: ${video.currentTime}`);
    });

    pause.addEventListener("click", function () {
        video.pause();
    });

	mute.addEventListener("click", function () {
        video.muted = !video.muted;
        if (!video.muted) {
			mute.textContent = "Mute";
        } else if(video.muted){
            mute.textContent = "Unmute";
        }
    });

    slow.addEventListener("click", function () {
        video.playbackRate -= 1/10;
        console.log(`Speed: ${video.playbackRate}`);
    });

    speed.addEventListener("click", function () {
        video.playbackRate += 1/10;
        console.log(`Speed: ${video.playbackRate}`);
    });


    
});
