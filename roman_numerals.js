/*
SET variable pecahan dengan nilai = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

CREATE function bernama convertToCoin dengan parameter sebuah number bernama money

  SET variable penampung dengan array kosong bernama arr
  DO looping dari variable i dengan nilai 0 hingga panjang pecahan dan setiap iterasi i bertambah 1
    Selama money lebih besar dari pecahan index i maka
      masukan nilai pecahan index i kedalam arr hingga habis
      SET kurangi money dengan pecahan index i

  kembalikan arr
*/

var pecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

function convertToCoin (money) {
  // your implementation code here

  var arr = []
  for (var i = 0; i < pecahan.length; i++) {
    while (money >= pecahan[i]) {
    arr.push(pecahan[i])
    money -= pecahan[i]
    }
  }
  return arr
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
