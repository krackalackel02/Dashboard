window.onload = () => {
    const root = document.documentElement;
    const rotAnimDur = getComputedStyle(root).getPropertyValue("--rotate-animation-duration");
    const dashButton = document.querySelector(".nav-title .material-symbols-outlined");
  
    dashButton.addEventListener("click", (e) => {
      e.target.classList.add("rotate");
      setTimeout(() => {
        e.target.classList.remove("rotate");
      }, parseFloat(rotAnimDur)); // Use the parsed duration value in milliseconds
    });
  };
  