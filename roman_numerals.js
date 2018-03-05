function convertToCoin (money) {
  let arrHasil = [];

  while(money >= 10000){
      arrHasil.push(10000);
      money -= 10000;
  }

  while(money >= 5000){
      arrHasil.push(5000);
      money -= 5000;
  }

  while(money >= 2000){
      arrHasil.push(2000);
      money -= 2000;
  }

  while(money >= 1000){
      arrHasil.push(1000);
      money -= 1000;
  }

  while(money >= 500){
      arrHasil.push(500);
      money -= 500;
  }

  while(money >= 200){
      arrHasil.push(200);
      money -= 200;
  }

  while(money >= 100){
      arrHasil.push(100);
      money -= 100;
  }

  while(money >= 50){
      arrHasil.push(50);
      money -= 50;
  }

  while(money >= 20){
      arrHasil.push(20);
      money -= 20;
  }

  while(money >= 10){
      arrHasil.push(10);
      money -= 10;
  }

  while(money >= 1){
      arrHasil.push(1);
      money -= 1;
  }

  return arrHasil;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
