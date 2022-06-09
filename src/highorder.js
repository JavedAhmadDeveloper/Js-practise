// function that invokes other functions
// wether as parameter or return function

function higherOrder(fn) {
  fn();
}

higherOrder(function () {
  var x = "function passed and called as parameter";
  console.log(x);
});

// example #2

function higherOrder2() {
  return function () {
    return "function from a function is called";
  };
}

var x = higherOrder2();
console.log(x());
