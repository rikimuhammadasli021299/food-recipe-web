window.onscroll = () => {
  scrollFunction();
};

// Scroll Handler
function scrollFunction() {
  let navbarTogglerStatus = document.querySelector('.navbar-toggler').classList.contains('collapsed');

  if (navbarTogglerStatus) {
    if (document.documentElement.scrollTop > 100) {
      changeNavbarBg();
    } else {
      changeNavbarBgTransparent();
    }
  }
}

// Click Handler
document.querySelector('.navbar-toggler').addEventListener('click', () => {
  let navbarTogglerStatus = document.querySelector('.navbar-toggler').classList.contains('collapsed');

  if (navbarTogglerStatus) {
    if (documentElement.scrollTop > 100) {
    } else {
      changeNavbarBgTransparent();
    }
  } else {
    changeNavbarBg();
  }
});

function changeNavbarBg() {
  document.getElementById('navbar').classList.remove('bg-transparent');
  document.getElementById('navbar').classList.add('bg-white');
  document.getElementById('navbar').classList.add('nav-shadow');
}

function changeNavbarBgTransparent() {
  document.getElementById('navbar').classList.remove('bg-white');
  document.getElementById('navbar').classList.remove('nav-shadow');
  document.getElementById('navbar').classList.add('bg-transparent');
}
