const unchecked = document.querySelectorAll('input[type=checkbox]:not(:checked)');
const checked = document.querySelectorAll('input[type=checkbox]:checked');

checked.forEach((c) => {
  c.parentElement.classList.add("checked");
});

unchecked.forEach((c) => {
  c.parentElement.classList.remove("checked");
});
