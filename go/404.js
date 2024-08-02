var player = document.getElementById('player');

// adjust skybox height to multiple of 32
document.addEventListener("DOMContentLoaded", function () {
  var h = document.getElementById('skybox').offsetHeight;
  var s_h = Math.round(h / 32) * 32;
  document.getElementById('skybox').style.height = `${s_h}px`;
});

function walkLeft() {
  player.className = "walk-left";
  setTimeout(searchLeft, 3000);
}
function searchLeft() {
  player.className = "search-left";
  // player.style.left = "40%";
  setTimeout(walkRight, 3000);
}
function walkRight() {
  player.className = "walk-right";
  setTimeout(searchRight, 3000);
}
function searchRight() {
  player.className = "search-right";
  // player.style.left = "60%";
  setTimeout(walkLeft, 3000);
}

function updateText() {
  const urlParams = new URLSearchParams(window.location.search);
  const mainText = urlParams.get('text') || urlParams.get('t') || 'Game over';
  const subText = urlParams.get('subtext') || urlParams.get('s') || '404 NOT FOUND';
  const title = urlParams.get('title') || urlParams.get('ti') || 'Whoopsie!';
  
  document.getElementById('text').innerHTML = mainText + '<br><span id="subtext">' + subText + '</span>';
  document.title = title;

  const textElement = document.getElementById('text');
  if (textElement) {
      textElement.innerHTML = mainText + '<br><span id="subtext">' + subText + '</span>';
  } else {
      console.error('Element with id "text" not found');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateText);
} else {
  updateText();
}

walkLeft();