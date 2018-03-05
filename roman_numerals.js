/*
function convertToCoin parameter number money
  1. Buat variable hasil sama dengan array kosong
  2. BUat variable coin sama dengan array dengan nila 1, 10, 20, 50, 100, 200, 500, 1000, 20000, 50000, 100000
  3. Urutkan variable coin dari yang besar ke kecil sama dengan variable sortCoin
    4. LOOP index i sama dengan nol, index i kurang dari panjang sortCoincoin dengan index i pertambahan satu
      5. Buat kondisi while dimana parameter money lebih besar dari sortCoin index i maka
        6. parameter money sama dengan parameter money dikurang sortCoin index i
          7. Masukan sortCoin index i ke hasil
    end LOOP
  .8. return hasil
end function
 */

function convertToCoin(money) {
  // your implementation code here-
  var hasil = [];
  var coin = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  var sortCoin = coin.sort(function(a, b) {
    return b - a;
  });

  for (var i = 0; i < sortCoin.length; i++) {
    while (money >= sortCoin[i]) {
      money -= sortCoin[i];
      hasil.push(sortCoin[i]);
    }
  }
  return hasil;
}

// Drive code
console.log(convertToCoin(543));
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752));
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454));
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
