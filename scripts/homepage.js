const navbtn = document.getElementById('nav-btn');

navbtn.addEventListener('click', () => { 
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('expanded');
  navbtn.classList.toggle('expanded');
});

