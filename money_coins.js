function money_coins(input){
  coins=[
          {nominal : 1, qty : 3},
          {nominal : 10, qty : 2},
          {nominal : 20, qty : 2},
          {nominal : 50, qty : 3},
          {nominal : 100, qty : 2},
        ]
  var arrHasil=[]
  var jml=0
  for (var i = coins.length-1; i >= 0 ; i--) {
    while(input-coins[i].nominal>=0 && coins[i].qty>=0){
      input=input-coins[i].nominal
      coins[i].qty--
      jml++
    }
    if(jml!==0){
      arrHasil.push('nominal : '+coins[i].nominal+', qty : '+jml)
    }
    jml=0
  }
  console.log(arrHasil.join('\n'));
}

money_coins(152)
