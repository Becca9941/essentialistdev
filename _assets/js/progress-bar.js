// Progress Bar
window.onscroll = function() { progressBar() };

function progressBar() {
  const distanceFromTop = document.body.scrollTop || document.documentElement.scrollTop;
  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progressBarWidth = (distanceFromTop / pageHeight) * 100;
  document.querySelector('.bar').style.width = progressBarWidth + '%';
}
