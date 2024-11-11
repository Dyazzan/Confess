function moveNoButton() {
    const noBtn = document.getElementById("noBtn");
    const container = document.querySelector(".button-container");

    const maxX = container.clientWidth - noBtn.clientWidth;
    const maxY = container.clientHeight - noBtn.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

function showLoveMessage() {
    const loveMessage = document.getElementById("loveMessage");
    const extraMessage = document.getElementById("extraMessage");

    loveMessage.classList.remove("hidden");
    extraMessage.classList.remove("hidden");  // Paparkan mesej tambahan
}

function submitResponse() {
    const response = document.getElementById("responseInput").value;
    localStorage.setItem('userResponse', response);
    alert("Jawapan anda telah dihantar!");
}