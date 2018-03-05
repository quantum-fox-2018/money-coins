function convertToCoin (money) {
  var koinPecahan = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  var arrayHasil = [];

    while (money >= 0) {
      // if (money != 0) {
      for (var i = koinPecahan.length; i >= 0; i--) {
        var koin = koinPecahan[i];
        while (money >= koin) {
          money -= koinPecahan[i]
          arrayHasil.push(koin)
      // }
      }
    }
  return arrayHasil
  }
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
