function convertToCoin (money) {
  // your implementation code here
  let coin = [[10000,0], [5000,10], [2000,3], [1000,1], [500,0], [200,4], [100,1], [50,1], [20,2], [10,2], [1,10]]
  let result = []
  let stock = 0

  for(let i=0; i<coin.length; i++){
    
    while(money - coin[i][0] >= 0 && coin[i][1] > 0){
      // stock = coin[i][1]
      money = money - coin[i][0]
      coin[i][1] --
      stock ++
    }
    if(stock !== 0){

      for(let j=0; j<stock; j++){
        result.push(coin[i][0])
      }
    }
    stock = 0
  }
  return result
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
