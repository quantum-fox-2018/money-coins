function money_coins(input){
  coins=[
          {nominal : 1, qty : 3},
          {nominal : 10, qty : 2},
          {nominal : 20, qty : 2},
          {nominal : 50, qty : 3},
          {nominal : 100, qty : 4},
        ]
  var arrHasil=[]
  var jml=0
  for (var i = coins.length-1; i >= 0 ; i--) {
    while(input-coins[i].nominal>=0 && coins[i].qty>0){
      input=input-coins[i].nominal
      coins[i].qty--
      jml++
    }
    if(jml!==0){
      var obj={nominal:coins[i].nominal,qty : jml}
      arrHasil.push(obj)
    }
    jml=0
  }

  for (var i = 0; i < arrHasil.length; i++) {
    for (var j = 0; j < arrHasil[i].qty; j++) {
      console.log(arrHasil[i].nominal);
    }
  }

}

money_coins(502)
