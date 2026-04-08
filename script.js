// Floating hearts
const container = document.getElementById("hearts");

for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 5 + 3) + "s";
    container.appendChild(heart);
}

// Play song
function playSong() {
    document.getElementById("song").play();
}