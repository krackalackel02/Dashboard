	const root = document.documentElement;
	const rotAnimDur = getComputedStyle(root).getPropertyValue(
		"--rotate-animation-duration"
	);
	const dashButton = document.getElementById("dash-logo");
	const dashTitle = document.getElementById("dash-title");
	const navBar = document.getElementById("navbar");
	let navTitle = [dashButton, dashTitle];
	navTitle.forEach((object) => {
		object.addEventListener("click", (e) => {
			dashButton.classList.add("rotate");
			navBar.classList.toggle("collapsed");
			setTimeout(() => {
				dashButton.classList.remove("rotate");
			}, parseFloat(rotAnimDur)); // Use the parsed duration value in milliseconds
		});
	});


  const notifButton = document.getElementById("notifications")
  notifButton.addEventListener("click",(e)=>{
    let text = notifButton.innerText
    notifButton.innerText = text=="notifications_active"? "notifications_off":"notifications_active"
  })


  const clickIcons = document.querySelectorAll("#content .icon-click")
  clickIcons.forEach((icon)=>{
    icon.addEventListener("click",(e)=>{
      e.target.classList.toggle("toggled")
    })
  })