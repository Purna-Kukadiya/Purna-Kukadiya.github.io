document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Photo lightbox (gallery + research photos)
  var items = document.querySelectorAll(".g-item a");
  if (!items.length) return;

  var box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt=""><p></p>';
  document.body.appendChild(box);
  var boxImg = box.querySelector("img");
  var boxCap = box.querySelector("p");

  function close() { box.classList.remove("open"); }

  items.forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var img = a.querySelector("img");
      var cap = a.parentElement.querySelector("figcaption");
      boxImg.src = a.getAttribute("href");
      boxImg.alt = img ? img.alt : "";
      boxCap.textContent = cap ? cap.textContent : "";
      box.classList.add("open");
    });
  });

  box.addEventListener("click", function (e) {
    if (e.target !== boxImg) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
});
