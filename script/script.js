//JAVASCRIPT BURGER MENU

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const nav_links = document.getElementsByClassName('nav_links')[0]

toggleButton.addEventListener('click', () => {
  nav_links.classList.toggle('active')
})


//JAVASCRIPT ACORDEON
const accordionItems = document.querySelectorAll(".accordion__item--summary");

accordionItems.forEach(function(item) {
  item.addEventListener("click", function(event) {
    event.stopPropagation();
    item.parentNode.classList.toggle("accordion__item--active");
  });
});
