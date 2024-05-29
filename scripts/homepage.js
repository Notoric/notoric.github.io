const navbtn = document.getElementById('nav-btn');
const topshrtct = document.getElementById('top-shrtct');

navbtn.addEventListener('click', () => { 
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('expanded');
  navbtn.classList.toggle('expanded');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    topshrtct.classList.add('visible');
  } else {
    topshrtct.classList.remove('visible');
  }
});

topshrtct.addEventListener('click', () => {
  if (window.scrollY > 100) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

async function updateAge() {
  setInterval(() => {
    const birthdate = new Date('2002-02-12T07:35:00Z');
    let age = Date.now() - birthdate.getTime();
    age = age / 31556952000;

    age = age.toFixed(9);

    const ageElement = document.getElementById('age');
    ageElement.textContent = age;

    console.log('Hello, world!');
  }, 50);
}

updateAge();