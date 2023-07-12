const root = document.documentElement;
const rotAnimDur = getComputedStyle(root).getPropertyValue(
	"--rotate-animation-duration"
);
const dashButton = document.getElementById("dash-logo");
const dashTitle = document.getElementById("dash-title");
const navBar = document.getElementById("navbar");
const header = document.getElementById("header");
let navTitle = [dashButton, dashTitle];
navTitle.forEach((object) => {
	object.addEventListener("click", (e) => {
		dashButton.classList.add("rotate");
		navBar.classList.toggle("collapsed");
		header.classList.toggle("collapsed");
		setTimeout(() => {
			dashButton.classList.remove("rotate");
		}, parseFloat(rotAnimDur)); // Use the parsed duration value in milliseconds
	});
});

const notifButton = document.getElementById("notifications");
notifButton.addEventListener("click", (e) => {
	let text = notifButton.innerText;
	notifButton.classList.add("rotate");
	setTimeout(() => {
		notifButton.innerText =
			text == "notifications_active"
				? "notifications_off"
				: "notifications_active";
		setTimeout(() => {
			notifButton.classList.remove("rotate");
		}, parseFloat(rotAnimDur) / 2); // Use the parsed duration value in milliseconds
	}, parseFloat(rotAnimDur) / 2);
});

const clickIcons = document.querySelectorAll("#content .icon-click");
clickIcons.forEach((icon) => {
	icon.addEventListener("click", (e) => {
		e.target.classList.toggle("toggled");
	});
});

const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");
searchIcon.addEventListener("click", (e) => {
	searchBar.focus();
});

const smallProfile = document.querySelectorAll(".small-profile")[0];
smallProfile.addEventListener("click", (e) => {
	smallProfile.classList.add("rotate");
	setTimeout(() => {
		smallProfile.classList.remove("rotate");
	}, parseFloat(rotAnimDur)); // Use the parsed duration value in milliseconds
});

