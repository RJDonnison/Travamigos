const button = document.getElementById("scroll");

function changeScroll() {
  if (button.dataset.scroll == "down") button.href = "#scroll";
  else button.href = "#top";
}

window.onscroll = () => {
  if (getYPosition() > 730) button.dataset.scroll = "up";
  else button.dataset.scroll = "down";
};

function getYPosition() {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  return top;
}
