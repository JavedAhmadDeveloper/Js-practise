function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// another example of closure

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

var add = add5(2); // 5+2
console.log(add); //7
var add2 = add10(10); // 10+10
console.log(add2); //20
console.log(add5(2)); // 7
console.log(add10(2)); // 12
