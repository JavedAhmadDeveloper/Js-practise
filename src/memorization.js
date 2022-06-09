function memorization() {
  var cache = {};
  return function (num) {
    if (num in cache) {
      console.log("cached value");
      return cache[num];
    } else {
      cache[num] = num + 256;
      console.log(" array value");
      return cache[num];
    }
  };
}

var x = memorization();
console.log(x(20));
console.log(x(10));
console.log(x(20));
console.log(x(30));
console.log(x(20));
console.log(x(10));
