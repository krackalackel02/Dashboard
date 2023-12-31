const projectWrapper = document.querySelector(".project-wrapper");
import myProjects from "./projects.js";
function formatGitHubLink(link) {
	if (!link.startsWith("https://krackalackel02.github.io/")) {
		return "Invalid link";
	}

	// Remove the specific prefix and append to the GitHub URL
	const repositoryName = link.replace("https://krackalackel02.github.io/", "");
	return "https://github.com/krackalackel02/" + repositoryName;
}
for (const project of myProjects) {
	let projectCardTemp = document.createElement("div");
	let details = project.details;
	let name = project.name;
	let img = project.img;
	let link = project.link;
	let repoLink = formatGitHubLink(link);
	projectCardTemp.setAttribute("link", link);
	projectCardTemp.classList.add("project-card");
	projectCardTemp.style.backgroundImage = "url('" + img + "')";
	projectCardTemp.innerHTML = `
								<div class="project-content">
									<h4 class="project-title">${name}</h4>
										<p class="project-details">
												${details}
										</p>
								</div>
								<span class="toggles">
									<span class="material-symbols-outlined icon-click">
										favorite
									</span>
									<span class="material-symbols-outlined icon-click">
										visibility
									</span>
									<a href=${repoLink}><span class="material-symbols-outlined"> share </span></a>
								</span>
	`;
	projectWrapper.appendChild(projectCardTemp);
}

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

const announce = document.querySelector(".announce");
let panels = document.querySelectorAll(".announce-panel");
announce.addEventListener("click", (e) => {
	panels.forEach((panel) => {
		let button = panel.querySelector(".announce-trigger");
		button.ariaExpanded = "false";
		let content = panel.querySelector(".announce-content");
		content.ariaHidden = "true";
	});
	let panelClick = e.target.closest(".announce-panel");
	if (!panelClick) return;
	let button = panelClick.querySelector(".announce-trigger");
	button.ariaExpanded = "true";
	let content = panelClick.querySelector(".announce-content");
	content.ariaHidden = "false";
});

projectWrapper.addEventListener("click", (e) => {
	let activeProject = e.target.closest(".project-card");
	let activeToggles = e.target.closest(".toggles");
	if (!activeProject) return;
	if (activeToggles) return;
	open(activeProject.getAttribute("link"));
});
