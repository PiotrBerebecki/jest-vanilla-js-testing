function sum(a, b) {
  return a + b;
}

console.log('Not part of module.exports but still appearing in terminal, why?');

window.onload = function() {
  var button = document.getElementById('button');
  button.addEventListener('click', function(e) {
    console.log('button was clicked');
  });
};


  module.exports = {
    sum
  };
