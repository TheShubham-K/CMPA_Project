document.getElementById("playAudio").addEventListener("click", playAudio);
document.getElementById("pauseAudio").addEventListener("click", pauseAudio);
document.getElementById("stopAudio").addEventListener("click", stopAudio);
document.getElementById("volumeUp").addEventListener("click", volumeUp);
document.getElementById("volumeDown").addEventListener("click", volumeDown);
var myMedia = null;

function playAudio() {
   var src = "music/mere.mp3";
   alert("music will play now ");
   if (myMedia == null) {
      myMedia = new Media(src, onSuccess, onError);

      function onSuccess() {
         console.log("playAudio Success");
      }

      function onError(error) {
         console.log("playAudio Error: " + error.code);
      }
   }
   myMedia.play();
}

function pauseAudio() {
   if (myMedia) {
      myMedia.pause();
   }
}

function stopAudio() {
   if (myMedia) {
      myMedia.stop();
   }
   myMedia = null;
}
var volumeValue = 0.5;

function volumeUp() {
   if (myMedia && volumeValue < 1) {
      myMedia.setVolume(volumeValue += 0.1);
   }
}

function volumeDown() {
   if (myMedia && volumeValue > 0) {
      myMedia.setVolume(volumeValue -= 0.1);
   }
}