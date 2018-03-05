function convertToCoin (money) {
  // your implementation code here
  // let arrCoin = [1,10,20,50,100,200,500,1000,2000,5000,10000];
  let arrCoin = [10000,5000,2000,1000,500,200,100,50,20,10,1];
  let arrResult = [];
  let arrStockCoin = [[10000,3],[5000,2],[2000,2],[1000,5],[500,1],[200,2],[100,2],[50,2],[20,0],[10,5],[1,10]];
  // console.log(arrStockCoin[0][1]); //3
  // console.log(arrStockCoin[0][1] = arrStockCoin[0][1]-1); //2
  // console.log(arrStockCoin[0][1]); //2
  // console.log(arrStockCoin.length); //11
  // console.log(arrCoin.length); //11
  
  while(money != 0) {
    let status = true;
    for (let i = 0; i < arrStockCoin.length; i++) {
      if (arrStockCoin[i][0] <= money && status == true && arrStockCoin[i][1] > 0) {
        status = false;
        arrResult.push(arrStockCoin[i][0]);
        money -= arrStockCoin[i][0];
        arrStockCoin[i][1] = arrStockCoin[i][1] - 1;
        // console.log('===',i,arrResult,money)
      }
    }
  }
  return arrResult;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

// console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

// console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
