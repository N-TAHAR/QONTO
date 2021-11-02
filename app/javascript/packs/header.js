let burger_menu = document.querySelector('header nav .burger-menu')
let menu_list = document.querySelector('header nav .menu-list')

burger_menu.addEventListener('click', () => {
  burger_menu.classList.toggle('open')
  menu_list.classList.toggle('open')
})