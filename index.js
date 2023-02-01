var darkThemeButton = document.getElementById("dark-theme-button");
var body = document.querySelector("body");

darkThemeButton.addEventListener("click", function () {
	document.documentElement.classList.toggle("dark");
	body.classList.toggle("dark");
	body.classList.toggle("light");
});
