      // Класс  main-nav__toggle- -closed по умолчанию,- мобильное меню закрыто, для его
      // открытия нужно нажать на кнопку бургера, для закрытия тоже нажать на крестик
      // Переменные для открытия и закрытия верхнего меню в мобилке

var mainNavToggle = document.querySelector(".main-nav__toggle");
var listToggle = document.querySelector(".main-nav__list");
var logoToggle = document.querySelector(".page-header__logo");

// действия по умолчанию -Если есть JS, то лишние классы ниже убираются, добавляется -конкретно класс закрытого меню - и у нас грузится страница, со спрятанным меню

mainNavToggle.classList.remove("main-nav__toggle--nojs");
mainNavToggle.classList.remove("main-nav__toggle--closed");
listToggle.classList.add("site-list--closed");
logoToggle.classList.remove("page-header__logo--mobile");

// Открываем и закрываем меню в мобильной версии

mainNavToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainNavToggle.classList.toggle("main-nav__toggle--closed");
  listToggle.classList.toggle("site-list--closed");
  logoToggle.classList.toggle("page-header__logo--mobile");
});
