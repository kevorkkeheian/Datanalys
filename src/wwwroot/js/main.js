
window.setTitle = (title) => {
  console.log('Setting title', title);
  document.title = title;
}


window.getDimensions = function () {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

function goBack() {
  window.history.back();
}