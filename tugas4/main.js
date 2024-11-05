
function cekGanjilGenap(angka) {
    if (angka % 2 === 0) {
        console.log("Angka " + angka + " adalah genap");
    } else {
        console.log("Angka " + angka + " adalah ganjil");
    }
}

// Contoh penggunaan
cekGanjilGenap(7); // Output: "Angka 7 adalah ganjil"
cekGanjilGenap(4); // Output: "Angka 4 adalah genap"
