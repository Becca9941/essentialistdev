window.addEventListener("load", () => {
  document.querySelector(".main-content").addEventListener("scroll", progressBar);
});

function progressBar() {
  const content = document.querySelector(".main-content");
  const distanceFromTop = content.scrollTop;
  const pageHeight = content.scrollHeight - content.clientHeight;
  const progressBarWidth = (distanceFromTop / pageHeight) * 100;
  document.querySelector('.bar').style.width = progressBarWidth + '%';
}
