window.onload = () => {
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
};
