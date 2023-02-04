function on() {
  var menuBar = document.getElementById('menuBar');

  var overlay = document.getElementById('overlay');

  menuBar.classList.toggle('menuBarStyle');
  overlay.classList.toggle('overlayStyle');
}

function categoryOn() {
  var category = document.getElementById('category');

  category.classList.toggle('categoryStyle');
}
