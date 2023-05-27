// Меню
const icon = document.querySelector(".menu_icon");
const menu = document.querySelector(".menu-body");
const body = document.querySelector("body");

if (icon) {
	icon.addEventListener("click", function (e) {
		icon.classList.toggle("active");
		menu.classList.toggle("active");
		body.classList.toggle("active");
	});
}
