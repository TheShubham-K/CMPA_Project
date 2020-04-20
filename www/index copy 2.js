document.getElementById("vibration").addEventListener("click", vibration);
document.getElementById("vibrationPattern").addEventListener("click", vibrationPattern);

function vibration() {
    alert("hi");
    var time = 3000;
    navigator.vibrate(time);
}

function vibrationPattern() {
    alert("Hii");
    var pattern = [1000, 1000, 1000, 1000, 1000];
    navigator.vibrate(pattern);
}