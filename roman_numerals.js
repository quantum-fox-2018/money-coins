function convertToCoin (money) {
  let coins = [10000, 5000, 2000, 500, 200, 50, 20, 1];
  
  let getCoins = []
  for(let i=0; i<coins.length; i++){
    if(money >= coins[i]){
      getCoins.push(coins[i])
      money -= coins[i]
      i--;
    }
  }
  return getCoins;
  // return getCoins;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
