function convertToCoin (input) {
  var num = [{
    money:10000,stock:2
  },{
    money:5000,stock:2
  },{
    money:2000,stock:2
  },{
    money:1000,stock:2
  },{
    money:500,stock:5
  },{
    money:200,stock:7
  },{
    money:100,stock:10
  },{
    money:50,stock:5
  },{
    money:20,stock:0
  },{
    money:10,stock:10
  },{
    money:1,stock:10
  }];
  var result = [];
  for(let i=0;i<num.length;i++){
    while(num[i].stock>0 && input>=num[i].money){
      input-=num[i].money;
      result.push(num[i].money);
      num[i].stock--;
    }
  }
  return result;
}

// Drive code
console.log(convertToCoin(99))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
