// function convertToCoin (money) {
//   // your implementation code here
//   let obj = [{
//     coin: 1,
//   },{
//     coin: 10,
//   },{
//     coin: 20,
//   },{
//     coin: 50,
//   },{
//     coin: 100,
//   },{
//     coin: 200,
//   },{
//     coin: 500,
//   },{
//     coin: 1000,
//   },{
//     coin: 2000,
//   },{
//     coin: 5000,
//   },{
//     coin: 10000,
//   }]

//   let arrCoin = []
//   for(let i= obj.length-1; i >= 0; i--) {
//     if(money - obj[i].coin >= 0) {
//       money -= obj[i].coin;
//       arrCoin.push(obj[i].coin);
//       i++;
//     }
//   }
//   return arrCoin

// }

// // Drive code
// console.log(convertToCoin(543))
// //output : [ 500, 20, 20, 1, 1, 1 ]

// console.log(convertToCoin(7752))
// //output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

// console.log(convertToCoin(37454))
// //output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]

function convertToCoin (money) {
  // your implementation code here
  let obj = [{
    coin: 1,
    stock: 9
  },{
    coin: 10,
    stock: 4
  },{
    coin: 20,
    stock: 2
  },{
    coin: 50,
    stock: 2
  },{
    coin: 100,
    stock: 2
  },{
    coin: 200,
    stock: 2
  },{
    coin: 500,
    stock: 2
  },{
    coin: 1000,
    stock: 4
  },{
    coin: 2000,
    stock: 9
  },{
    coin: 5000,
    stock: 1
  },{
    coin: 10000,
    stock: 2
  }]

  let arrCoin = []
  for(let i= obj.length-1; i >= 0; i--) {
    if(money - obj[i].coin >= 0) {
      if(obj[i].stock > 0) {
        money -= obj[i].coin;
        arrCoin.push(obj[i].coin);
        obj[i].stock = obj[i].stock - 1;
        i++;
      }
    }
  }
  return arrCoin

}

// Drive code
// console.log(convertToCoin(543))
// //output : [ 500, 20, 20, 1, 1, 1 ]

// console.log(convertToCoin(7752))
// //output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]