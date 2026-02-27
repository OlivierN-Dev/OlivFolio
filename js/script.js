let currentIndex = 0;
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".menu li a");

function showSection(index) {
  if (index === currentIndex) return;
  sections.forEach((s, i) => {
    s.classList.remove("active", "left", "right");
    links[i].classList.remove("active");
    if (i === index) {
      s.classList.add("active");
      links[i].classList.add("active");
    } else {
      s.classList.add(i < index ? "left" : "right");
    }
  });
  currentIndex = index;
}

function setTheme() {
  let current = document.documentElement.getAttribute("data-theme");

  if (current == "white") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "white");
  }
}
function MouseMove(event) {
  const divMouseMove = document.querySelector(".followMouse");

  let rectX = event.clientX;
  let rectY = event.clientY;

  let leftX = rectX - 22;
  let topY = rectY - 20;

  divMouseMove.style.left = leftX + "px";
  divMouseMove.style.top = topY + "px";
}

document.addEventListener("mousemove", (event) => MouseMove(event));
