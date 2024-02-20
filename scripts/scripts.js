var divs = document.querySelectorAll('.bounce, .roll, .spin, .flip');

function startAnimation(i) {
  if (i >= divs.length) return;

  divs[i].style.display = 'block';

  divs[i].classList.add('animation');

  divs[i].addEventListener('animationend', function() {
    divs[i].style.display = 'none';
    startAnimation(i + 1);
  });
}

startAnimation(0);