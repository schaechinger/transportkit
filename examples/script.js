const cities = document.getElementsByClassName('city');

function cityChange() {
  const hash = window.location.hash.substr(1) || 'munich';

  for (let i = 0; cities.length > i; i++) {
    const city = cities[i];

    if (city.classList.contains(`city-${hash}`)) {
      city.style.display = 'block';
    } else {
      city.style.display = 'none';
    }
  }
}

function modeChange() {
  const lines = document.querySelectorAll('span[class^="transportkit-"]');
  document.getElementsByTagName('body')[0].classList.toggle('dark');

  for (let i = 0; lines.length > i; i++) {
    const line = lines[i];
    line.classList.toggle(`${line.classList[0]}--contrast`);
  }
}

window.onload = cityChange;
window.addEventListener('hashchange', cityChange);
document.getElementById('mode-toggle').onclick = modeChange;
