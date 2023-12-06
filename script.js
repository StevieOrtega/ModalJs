const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("modal-btn");
const modalDisplay = document.getElementById("modal-container");

function open() {
  modalDisplay.style.display = "block";
}

function close() {
  modalDisplay.style.display = "none";
}
openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
