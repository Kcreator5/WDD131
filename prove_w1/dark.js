const toggle = document.querySelector("#dark-toggle");
const darkImage = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";
const image = document.querySelector("img");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
  if (toggle.checked) {
    image.src = darkImage;
  } else {
    image.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
  }
});
