# Sum of Arrays
INISIALISASI arrPecahan = [10000,5000,2000,1000,500,200,100,50,20,10,1]
INISIALISASI arrHasilPecahan = []
LOOPING dari i=0 SAMPAI i<arrPecahan.length
  IF money>=arrPecahan[i]
    money-= arrPecahan[i]
    arrHasilPecahan.push(arrPecahan[i])
    i = 0
RETURN arrHasilPecahan
