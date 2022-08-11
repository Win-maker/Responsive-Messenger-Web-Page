const equal = document.querySelector(".fa-equals");
const xmark = document.querySelector(".fa-xmark");
const phoneMenu = document.querySelector(".phoneMenu");
const mainContainer = document.querySelector(".mainContainer");
const footer = document.querySelector(".footer");
const alert = document.querySelector(".alert");
const closeXmark = document.querySelector(".closeXmark");

equal.addEventListener("click", () => {
  phoneMenu.style.display = "block";
  equal.style.display = "none";
  xmark.style.display = "inline-block";
  showMenu();
});

function showMenu() {
  mainContainer.style.display = "none";
  footer.style.display = "none";

  phoneMenu.textContent = "";
  const room = document.createElement("div");
  room.classList.add("room");
  room.textContent = "Room";
  phoneMenu.appendChild(room);

  const features = document.createElement("div");
  features.classList.add("features");
  features.innerHTML = "Features";
  phoneMenu.appendChild(features);

  const desktop = document.createElement("div");
  desktop.classList.add("desktop");
  desktop.innerHTML = "Desktop App";
  phoneMenu.appendChild(desktop);

  const privacy = document.createElement("div");
  privacy.classList.add("privacy");
  privacy.innerHTML = "Privacy and safety";
  phoneMenu.appendChild(privacy);

  const developer = document.createElement("div");
  developer.classList.add("developer");
  developer.innerHTML = "For developers";
  phoneMenu.appendChild(developer);
}

xmark.addEventListener("click", () => {
  xmark.style.display = "none";
  equal.style.display = "inline-block";
  phoneMenu.style.display = "none";
  mainContainer.style.display = "flex";
  footer.style.display = "flex";
});

window.addEventListener("load", () => {
  alert.style.bottom = "0px";
  closeXmark.addEventListener("click", () => {
    alert.style.bottom = "-150px";
  });
});
