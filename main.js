const acquaintImage = document.getElementById('acquaint-img');
const intertwinedImage = document.getElementById('intertwined-img');
const primoImage = document.getElementById('primo-main-img');
const fateText = document.getElementById('fates-title');
const fateTextForWhatUserHas = document.getElementById('fates-title-user-has');
const primosCalc = document.getElementById('user-primos-calc');
const fatesContainer = document.getElementById('input-container-fates');

let isAcquaintImageClicked = false;
let isPrimoImageClicked = false;
let isIntertwinedImageClicked = true;
let userFateInput = '';

function initializeStyles() {
  isAcquaintImageClicked = false;
  isPrimoImageClicked = false;
  isIntertwinedImageClicked = true;
  changeFateStylesOnClick();
  changeFateText();
}

function changeFateStylesOnClick() {
  if (
    isAcquaintImageClicked &&
    !isIntertwinedImageClicked &&
    !isPrimoImageClicked
  ) {
    acquaintImage.style.filter = 'brightness(100%)';
    intertwinedImage.style.filter = 'brightness(50%)';
    primoImage.style.filter = 'brightness(50%)';
    primosCalc.style.display = 'none';
    fatesContainer.style.display = 'grid';
    fatesContainer.style.gap = '5rem';
  } else if (
    !isAcquaintImageClicked &&
    isIntertwinedImageClicked &&
    !isPrimoImageClicked
  ) {
    acquaintImage.style.filter = 'brightness(50%)';
    intertwinedImage.style.filter = 'brightness(100%)';
    primoImage.style.filter = 'brightness(50%)';
    primosCalc.style.display = 'none';
    fatesContainer.style.display = 'grid';
    fatesContainer.style.gap = '5rem';
  } else if (
    !isAcquaintImageClicked &&
    !isIntertwinedImageClicked &&
    isPrimoImageClicked
  ) {
    acquaintImage.style.filter = 'brightness(50%)';
    intertwinedImage.style.filter = 'brightness(50%)';
    primoImage.style.filter = 'brightness(100%)';
    primosCalc.style.display = 'grid';
    fatesContainer.style.display = 'none';
    primosCalc.style.gap = '5rem';
  }
}

function changeFateText() {
  if (!isAcquaintImageClicked && isIntertwinedImageClicked) {
    fateText.innerText = 'Intertwined Fates I Want:';
    fateText.style.background =
      '-webkit-linear-gradient(180deg, #3ad8ff, #fa70ff)';
    fateText.style.webkitBackgroundClip = 'text';
    fateText.style.webkitTextFillColor = 'transparent';
    fateText.style.fontSize = '1.5rem';
    fateText.style.textAlign = 'center';
    fateTextForWhatUserHas.innerText = 'Intertwined Fates I Have:';
    fateTextForWhatUserHas.style.color = 'white';
    fateTextForWhatUserHas.style.fontSize = '1.5rem';
    fateTextForWhatUserHas.style.textAlign = 'center';
  } else if (isAcquaintImageClicked && !isIntertwinedImageClicked) {
    fateText.innerText = 'Acquaint Fates I Want:';
    fateText.style.background =
      '-webkit-linear-gradient(180deg, #99fffa, #5ac2ff, #3593ff)';
    fateText.style.webkitBackgroundClip = 'text';
    fateText.style.webkitTextFillColor = 'transparent';
    fateText.style.textAlign = 'center';
    fateText.style.fontSize = '1.5rem';
    fateTextForWhatUserHas.innerText = ' Acquaint Fates I Have:';
    fateTextForWhatUserHas.style.color = 'white';
    fateTextForWhatUserHas.style.textAlign = 'center';
    fateTextForWhatUserHas.style.fontSize = '1.55rem';
  }
}

acquaintImage.addEventListener('click', function () {
  console.log('Acquaint Fate selected!');
  isAcquaintImageClicked = true;
  isIntertwinedImageClicked = false;
  isPrimoImageClicked = false;
  acquaintImage.style.transition = 'transform 0.25s ease-in-out';
  acquaintImage.style.transform = 'scale(1.1)';
  intertwinedImage.style.transform = 'scale(1)';
  primoImage.style.transform = 'scale(1)';
  changeFateStylesOnClick();
  changeFateText();
});

intertwinedImage.addEventListener('click', function () {
  console.log('Intertwined Fate selected!');
  isIntertwinedImageClicked = true;
  isAcquaintImageClicked = false;
  isPrimoImageClicked = false;
  intertwinedImage.style.transition = 'transform 0.25s ease-in-out';
  intertwinedImage.style.transform = 'scale(1.1)';
  acquaintImage.style.transform = 'scale(1)';
  primoImage.style.transform = 'scale(1)';
  changeFateStylesOnClick();
  changeFateText();
});

primoImage.addEventListener('click', function () {
  console.log('Primogems selected!');
  isIntertwinedImageClicked = false;
  isAcquaintImageClicked = false;
  isPrimoImageClicked = true;
  primoImage.style.transition = 'transform 0.25s ease-in-out';
  primoImage.style.transform = 'scale(1.1)';
  acquaintImage.style.transform = 'scale(1)';
  intertwinedImage.style.transform = 'scale(1)';
  changeFateStylesOnClick();
  changeFateText();
});

window.onload = initializeStyles;
