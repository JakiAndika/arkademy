//unlink Fs = Hapus data/file

//panggilan library FS
const fs = require('fs');

/*Baca file terserah.txt apakah ada filenya?
menggunakan fs.readFile */
fs.readFile('terserah', async(err,data) => {
    //jika data tidak ditemukan 
    if(err) console.log("Data tidak ditemukan!");

    //Jalankan console.log dulu menggunakan await
    await console.log("Data ditemukan!");

    //Data ditemukan kita langsung eksekusi delete
    fs.unlink('terserah.txt', (err) =>{
        //Jka gagal delete
        if(err) return console.log("Gagal hapus data");

        //Jika berhasil delete
        console.log("Hapus data berhasil");
    })
})