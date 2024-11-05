
function hitungDiskon(harga, diskon) {

    let jumlahDiskon = harga * (diskon / 100);

    let hargaSetelahDiskon = harga - jumlahDiskon;
   
    return hargaSetelahDiskon;
}


let hargaSetelahDiskon = hitungDiskon(100000, 20);
console.log("Harga setelah diskon: " + hargaSetelahDiskon); 

function cekUsiaMengemudi(usia) {
    if (usia >= 17) {
        console.log("Selamat! Kamu boleh mengemudi.");
    } else {
        console.log("Maaf, kamu belum cukup umur untuk mengemudi.");
    }
}

cekUsiaMengemudi(16); 
cekUsiaMengemudi(18); 
