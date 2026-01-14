const cookie = document.querySelector('#cookie');
const xmarkBtn = document.querySelector('#xmark');
const acceptBtn = document.querySelector('#accept');

if (!cookie) {
  console.warn('#cookie element not found');
}

function hideCookiePopup() {
  cookie.style.display = 'none';
}

if (localStorage.getItem('cookieConsent') === 'accepted') {
  hideCookiePopup();
}

xmarkBtn?.addEventListener('click', () => {
  hideCookiePopup();
});

acceptBtn?.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');
  hideCookiePopup();
});
