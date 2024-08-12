const acquaintImage = document.getElementById('acquaint-img');
const intertwinedImage = document.getElementById('intertwined-img');
const primoImage = document.getElementById('primo-main-img');
const fateText = document.getElementById('fates-title');
const fateTextForWhatUserHas = document.getElementById('fates-title-user-has');
const primosCalc = document.getElementById('user-primos-calc');
const fatesContainer = document.getElementById('input-container-fates');
const calculateButton = document.getElementById('calculate-button');
const alert = document.getElementById('alert');
const logEntryButton = document.getElementById('log-button');

let isAcquaintImageClicked = false;
let isPrimoImageClicked = false;
let isIntertwinedImageClicked = true;

let fatesInputWant = document.getElementById('input-fates-want');
let fatesInputHave = document.getElementById('input-fates-have');
let primosInputHave = document.getElementById('input-primos-have');
let primosInputWant = document.getElementById('input-primos-want');
let userWantsToLog = document.getElementById('user-wants-to-log');

userWantsToLog.style.display = 'none';

let resultText = document.getElementById('result');

// alerting user to enter amounts if they click on calculate but there are no amounts entered

calculateButton.addEventListener('click', function () {
  console.log('clicked calculation');

  // Get the values from the input fields (FATES)
  const fatesWantValue = parseInt(fatesInputWant.value) || 0;
  const fatesHaveValue = parseInt(fatesInputHave.value) || 0;
  let fatesResult = fatesWantValue - fatesHaveValue;

  if (
    (fatesWantValue <= 0 && fatesHaveValue <= 0) ||
    (fatesHaveValue <= 0 && fatesWantValue > 0) ||
    (fatesHaveValue > 0 && fatesWantValue <= 0)
  ) {
    console.log('alerting user');
    alert.innerText = 'Please enter a valid amount for both items.';
  } else if (
    isAcquaintImageClicked &&
    fatesWantValue > 0 &&
    fatesHaveValue > 0
  ) {
    let resultTextContent = `You need ${fatesResult} Acquaint Fates to reach your goal.`;
    userWantsToLog.style.display = 'block';
    // Apply the styling to the specific word "Acquaint Fates"
    resultTextContent = resultTextContent.replace(
      'Acquaint Fates',
      '<span style="background: -webkit-linear-gradient(180deg, #99fffa, #5ac2ff, #3593ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700;">Acquaint Fates</span>',
    );

    // Set the innerHTML of resultText to the styled content
    resultText.innerHTML = resultTextContent;

    alert.innerText = '';
  } else if (
    isIntertwinedImageClicked &&
    fatesWantValue > 0 &&
    fatesHaveValue > 0
  ) {
    let resultTextContent = `You need ${fatesResult} Intertwined Fates to reach your goal.`;
    userWantsToLog.style.display = 'block';
    // Apply the styling to the specific word "Intertwined Fates"
    resultTextContent = resultTextContent.replace(
      'Intertwined Fates',
      '<span style="background: -webkit-linear-gradient(180deg, #3ad8ff, #fa70ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700;">Intertwined Fates</span>',
    );

    // Set the innerHTML of resultText to the styled content
    resultText.innerHTML = resultTextContent;

    alert.innerText = '';
  }

  // Get the values from the input fields (PRIMOS)
  const primosHaveValue = parseInt(primosInputHave.value) || 0;
  const primosWantValue = parseInt(primosInputWant.value) || 0;
  let primosResult = primosWantValue - primosHaveValue;

  if (
    (isPrimoImageClicked && primosHaveValue <= 0 && primosWantValue <= 0) ||
    (isPrimoImageClicked && primosHaveValue > 0 && primosWantValue <= 0) ||
    (isPrimoImageClicked && primosWantValue > 0 && primosHaveValue <= 0)
  ) {
    console.log('alerting user');
    alert.innerText = 'Please enter a valid amount for both items.';
  } else if (
    isPrimoImageClicked &&
    primosHaveValue > 0 &&
    primosWantValue > 0
  ) {
    let resultTextContent = `You need ${primosResult} Primogems to reach your goal.`;
    userWantsToLog.style.display = 'block';
    // Apply the styling to the specific word "Primogems"
    resultTextContent = resultTextContent.replace(
      'Primogems',
      '<span style="background: -webkit-linear-gradient(180deg, #ff9dd6, #5de7ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700;">Primogems</span>',
    );

    // Set the innerHTML of resultText to the styled content
    resultText.innerHTML = resultTextContent;

    alert.innerText = '';
  }
});

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
    fatesContainer.style.gap = '2rem';
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
    fatesContainer.style.gap = '2rem';
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
    primosCalc.style.gap = '2rem';
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

function alertUserToEnterAmount() {}

window.onload = initializeStyles;
