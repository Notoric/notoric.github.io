const menu = document.getElementById('menu');

menu.addEventListener('click', () => { 
  const header = document.getElementById('header');
  header.classList.toggle('expanded');
  menu.classList.toggle('expanded');
});

