const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const currentYear = document.getElementById('current-year');
const profilePhoto = document.getElementById('profile-photo');
const photoFallback = document.getElementById('photo-fallback');

currentYear.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  });
});

function showPhotoFallback() {
  profilePhoto.hidden = true;
  photoFallback.hidden = false;
}

profilePhoto.addEventListener('load', () => {
  profilePhoto.hidden = false;
  photoFallback.hidden = true;
});

profilePhoto.addEventListener('error', showPhotoFallback);

if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
  showPhotoFallback();
}
