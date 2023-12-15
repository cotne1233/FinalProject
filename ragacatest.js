document.getElementById('colorfulButton').addEventListener('click', changeColor);

function changeColor() {
  // randomulad ferebs igebs
  const randomColor = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;

  document.getElementById('colorfulButton').style.backgroundColor = randomColor;
}

function getRandomValue() {
  return Math.floor(Math.random() * 256);
}
//fsafaifajffidslkajsifijfjkmdssijfeikoaewjfosiejfosefsefdsef