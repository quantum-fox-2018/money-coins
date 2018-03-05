function convertToCoin (money) {
  var result = [];
  while (money > 0) {
    if (money >= 10000) {money -= 10000; result.push(10000)}
    else if (money >= 5000) {money -= 5000; result.push(5000)}
    else if (money >= 2000) {money -= 2000; result.push(2000)}
    else if (money >= 1000) {money -= 1000; result.push(1000)}
    else if (money >= 500) {money -= 500; result.push(500)}
    else if (money >= 200) {money -= 200; result.push(200)}
    else if (money >= 100) {money -= 100; result.push(100)}
    else if (money >= 50) {money -= 50; result.push(50)}
    else if (money >= 20) {money -= 20; result.push(20)}
    else if (money >= 10) {money -= 10; result.push(10)}
    else {money -= 1; result.push(1)}
  }

  return result;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
