function convertToCoin(coin){
  var counterCoin = [1,10,20,50,100,200,500,1000,2000,5000,10000];
  var coinString = coin.toString();
  var coinArr = [];
  var counter=0;
  var counterDalam = 0;
  var coinResultArr = [];
  var coinNum = 0;

  for(counter=0;counter<coinString.length;counter++){
    coinArr.push(coinString[counter] * (Math.pow(10,coinString.length-1-counter)));
  }

  for(counter=0;counter<coinArr.length;counter++){

    coinNum = coinArr[counter];
    for(counterDalam=0;counterDalam<counterCoin.length;counterDalam++){

      while(coinNum>=counterCoin[counterCoin.length-1-counterDalam]){
        coinResultArr.push(counterCoin[counterCoin.length-1-counterDalam]);
        coinNum = coinNum - counterCoin[counterCoin.length-1-counterDalam];
      }

    }
  }

  return coinResultArr;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
