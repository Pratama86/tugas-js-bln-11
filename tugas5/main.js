
function cekGanjilGenap(angka) {
    if (angka % 2 === 0) {
        console.log(angka + " adalah angka genap.");
    } else {
        console.log(angka + " adalah angka ganjil.");
    }
}

// Contoh penggunaan
cekGanjilGenap(5); 
cekGanjilGenap(8); 


function hitungDiskon(harga, diskon) {
    let hargaSetelahDiskon = harga - (harga * (diskon / 100));
    return hargaSetelahDiskon;
}

// Contoh penggunaan
let hargaSetelahDiskon = hitungDiskon(100000, 20);
console.log("Harga setelah diskon: " + hargaSetelahDiskon); // Output: Harga setelah diskon: 80000
