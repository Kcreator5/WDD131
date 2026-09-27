const toggle = document.querySelector("#dark-toggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});