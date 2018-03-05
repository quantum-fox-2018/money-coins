function convertToCoin (money) {
  // your implementation code here
var arr = [];

var tampung = money;
  while (tampung >= 10000){
    tampung = tampung - 10000;
    arr.push(10000);
  }
  while (tampung >= 5000){
    tampung = tampung - 5000;
    arr.push(5000);
  }
  while (tampung >= 2000){
    tampung = tampung - 2000;
    arr.push(2000);
  }
  while (tampung >= 1000){
    tampung = tampung - 1000;
    arr.push(1000);
  }
  while (tampung >= 500){
    tampung = tampung - 500;
    arr.push(500);
  }
  while (tampung >= 200){
    tampung = tampung - 200;
    arr.push(200);
  }
  while (tampung >= 100){
    tampung = tampung - 100;
    arr.push(100);
  }
  while (tampung >= 50){
    tampung = tampung - 50;
    arr.push(50);
  }
  while (tampung >= 20){
    tampung = tampung - 20;
    arr.push(20);
  }
  while (tampung >= 10){
    tampung = tampung - 10;
    arr.push(10);
  }
  while (tampung >= 1){
    tampung = tampung - 1;
    arr.push(1);
  }
  return arr;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
