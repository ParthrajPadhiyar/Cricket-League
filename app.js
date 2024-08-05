const body = document.querySelector('body');
const header = document.querySelector('header');

const allSection = document.querySelectorAll('section');
allSection[0].setAttribute('id', 'about');
allSection[1].setAttribute('id', 'join');
allSection[2].setAttribute('id', 'fees');
allSection[3].setAttribute('id', 'location');
allSection[4].setAttribute('id', 'schedule');

const navbar = document.createElement('nav');
navbar.setAttribute("class", "navbar");
body.prepend(navbar);

const logo = document.createElement('a');
logo.setAttribute("href", "#");
navbar.appendChild(logo);

const imgLogo = document.createElement('img');
imgLogo.setAttribute("src", "logo.png");
imgLogo.setAttribute("class", "logo");
logo.appendChild(imgLogo);

const uList = document.createElement('ul');
navbar.appendChild(uList);

const menuItems = [
  { href: "#about", text: "About" },
  { href: "#join", text: "Join" },
  { href: "#fees", text: "Fees" },
  { href: "#location", text: "Location" },
  { href: "#schedule", text: "Schedule" }
];

menuItems.forEach(item => {
  const link = document.createElement('a');
  link.setAttribute("class", "navbar-list");
  link.setAttribute("href", item.href);
  link.innerText = item.text;
  uList.appendChild(link);
});

window.addEventListener('scroll', function() {
  let scrollPosition = window.pageYOffset;
  let headerHeight = header.offsetHeight;

  if (scrollPosition > headerHeight) {
    navbar.style.background = 'linear-gradient(135deg, rgba(139, 34, 34, 0.9) 0%, rgba(0, 122, 0, 0.8) 100%)';
    navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.boxShadow = 'none';
  }
  header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

document.addEventListener('mousemove', function(event) {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  let depthX = (mouseX / windowWidth) - 0.5;
  let depthY = (mouseY / windowHeight) - 0.5;

  header.style.transform = `translate(${depthX * 10}px, ${depthY * 10}px)`;
});

