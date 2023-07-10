window.onload = () => {
    const root = document.documentElement;
    const rotAnimDur = getComputedStyle(root).getPropertyValue("--rotate-animation-duration");
    const dashButton = document.querySelector(".nav-title .material-symbols-outlined");
    const navLinks = document.getElementById("nav-links");
    dashButton.addEventListener("click", (e) => {
      e.target.classList.add("rotate");
      navLinks.classList.toggle("collapsed");
      setTimeout(() => {
        e.target.classList.remove("rotate");
      }, parseFloat(rotAnimDur)); // Use the parsed duration value in milliseconds
    });
  };
  