var pecahanMoney = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10,1]

function convertToCoin (money) {
  // your implementation code here
  var resultArr = [];
  for (var i = 0; i < pecahanMoney.length; i++) {
    while(money - pecahanMoney[i] >= 0){
      resultArr.push(pecahanMoney[i].toString());
      money -= pecahanMoney[i];
    }
  }
  // var resultArr = [];
  // while(money - 10000 >= 0){
  //   resultArr.push("10000");
  //   money -= 10000;
  // }
  // while(money - 5000 >= 0){
  //   resultArr.push("5000");
  //   money -= 5000;
  // }
  // while(money - 2000 >= 0){
  //   resultArr.push("2000");
  //   money -= 2000;
  // }
  // while(money - 1000 >= 0){
  //   resultArr.push("1000");
  //   money -= 1000;
  // }
  // while(money - 500 >= 0){
  //   resultArr.push("500");
  //   money -= 500;
  // }
  // while(money - 200 >= 0){
  //   resultArr.push("200");
  //   money -= 200;
  // }
  // while(money - 100 >= 0){
  //   resultArr.push("100");
  //   money -= 100;
  // }
  // while(money - 50 >= 0){
  //   resultArr.push("50");
  //   money -= 50;
  // }
  // while(money - 20 >= 0){
  //   resultArr.push("20");
  //   money -= 20;
  // }
  // while(money - 10 >= 0){
  //   resultArr.push("10");
  // money -= 10;
  // }
  // while(money - 1 >= 0){
  //   resultArr.push("1");
  //   money -= 1;
  // }

return resultArr;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
