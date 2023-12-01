var count = 0;

function counter() {
  count = count + 1;
  document.getElementById('counting-meter').innerHTML = count;
}

function startgame() {
  document.getElementById('gameBox').style.display = 'none';
  document.getElementById('contentBox').style.display = '';
}
