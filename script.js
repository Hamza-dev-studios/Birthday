function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) music.play();
    else music.pause();
}

setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.textContent = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 1200);