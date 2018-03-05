function convertToCoin (money) {
  // your implementation code here
  // let arrCoin = [1,10,20,50,100,200,500,1000,2000,5000,10000];
  let arrCoin = [10000,5000,2000,1000,500,200,100,50,20,10,1];
  let arrResult = [];
  
  while(money != 0) {
    let status = true;
    for (let i = 0; i < arrCoin.length; i++) {
      if (arrCoin[i] <= money && status == true) {
        status = false;
        arrResult.push(arrCoin[i]);
        money -= arrCoin[i];
        // console.log('===',i,arrResult,money)
      }
    }
  }
  return arrResult;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
