/* 💬 Story Messages */
const story = [
  "Hey… suno na 👀💗",
  "Haan haan, tum hi ho 😌",
  "Tum aaye toh meri boring life bhi aesthetic ho gayi ✨",
  "Tum late reply karo ya seen pe chhod do… main fir bhi wait karta hoon 😤❤️",
  "Tumhari smile meri weakness hai 😌",
  "Ek honest question pooch sakta hoon? 🥺"
];

let i = 0;
const storyText = document.getElementById("storyText");
const questionBox = document.getElementById("questionBox");
const valentineBox = document.getElementById("valentineBox");
const successBox = document.getElementById("successBox");

/* ✨ Story Animation */
function playStory() {
  if (i < story.length) {
    storyText.innerHTML = story[i];
    i++;
    setTimeout(playStory, 1800);
  } else {
    questionBox.classList.remove("hidden");
  }
}
playStory();

/* ❓ Mini Question Click */
document.querySelector(".mini-btn").addEventListener("click", () => {
  questionBox.classList.add("hidden");
  valentineBox.classList.remove("hidden");
});

/* 😈 NO Button Dodge */
const noBtn = document.getElementById("noBtn");
const noTexts = [
  "Ayeee 😤",
  "Wrong choice 🙄",
  "Soch lo 😌",
  "Decoration hai ye 😏",
  "Try again cutie 💗"
];

noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 200 - 100 + "px";
  noBtn.style.top = Math.random() * 200 - 100 + "px";
  noBtn.innerText = noTexts[Math.floor(Math.random() * noTexts.length)];
});

/* 💖 YES */
document.getElementById("yesBtn").addEventListener("click", () => {
  valentineBox.classList.add("hidden");
  successBox.classList.remove("hidden");
  confetti();
});

/* 🎉 Confetti */
function confetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    dy: Math.random() * 3 + 2
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "pink";
      ctx.fill();
      p.y += p.dy;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* 🎵 Music */
const music = document.getElementById("bgMusic");
document.getElementById("musicToggle").addEventListener("click", () => {
  music.paused ? music.play() : music.pause();
});