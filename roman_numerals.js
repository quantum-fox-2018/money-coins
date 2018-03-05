function convertToCoin (money) {
  // your implementation code here
  //var pecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  var hasil = [];

  while (money >= 0) {
    if (money >= 10000) {
      money -= 10000;
      hasil.push(10000);
    } else if (money >= 5000) {
      money -= 5000;
      hasil.push(5000);
    } else if (money >= 2000) {
      money -= 2000;
      hasil.push(2000);
    } else if (money >= 1000) {
      money -= 1000;
      hasil.push(1000);
    } else if (money >= 500) {
      money -= 500;
      hasil.push(500);
    } else if (money >= 200) {
      money -= 200;
      hasil.push(200);
    } else if (money >= 100) {
      money -= 100;
      hasil.push(100);
    } else if (money >= 50) {
      money -= 50;
      hasil.push(50);
    } else if (money >= 20) {
      money -= 20;
      hasil.push(20);
    } else if (money >= 10) {
      money -= 10;
      hasil.push(10);
    } else {
      money--;
      hasil.push(1);
    }
  }

  return hasil;
}



// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
