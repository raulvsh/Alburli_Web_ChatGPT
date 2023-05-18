// script.js

// Función para mostrar el submenú
function showSubmenu() {
    var submenu = this.querySelector('.submenu');
    submenu.style.display = 'block';
  }
  
  // Función para ocultar el submenú
  function hideSubmenu() {
    var submenu = this.querySelector('.submenu');
    submenu.style.display = 'none';
  }
  
  // Obtener todos los elementos del menú con submenús
  var submenuItems = document.querySelectorAll('nav ul li');
  
  // Recorrer los elementos del menú con submenús
  submenuItems.forEach(function(item) {
    // Agregar el evento "mouseenter" para mostrar el submenú
    item.addEventListener('mouseenter', showSubmenu);
    // Agregar el evento "mouseleave" para ocultar el submenú
    item.addEventListener('mouseleave', hideSubmenu);
  });
  