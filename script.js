// Получаем элементы
const openMenu = document.querySelector(".menu-icon");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");

// Открытие меню
openMenu.addEventListener("click", () => {
	sidebar.classList.add("open");
});

// Закрытие меню
closeMenu.addEventListener("click", () => {
	sidebar.classList.remove("open");
});

// Закрытие при клике вне меню
document.addEventListener("click", (event) => {
	if (!sidebar.contains(event.target) && !openMenu.contains(event.target)) {
		sidebar.classList.remove("open");
	}
});
