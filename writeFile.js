const fs = require('node:fs');
fs.writeFile('hello.txt', 
    "Hello Nama Saya Angkasa Bagus Afriyanto, Saya Sekolah Di SMKN 15 KOTA BEKASi Kelas: XI TJKT 2 Alamat Rumah Saya Di Griya Cimuning Asri 2 Di Blok E/2 Umur saya 16 Tahun",
   function(error){
    if(error) {
        console.error('Terjadi Error');
    } else {
        console.log('File Berhasil Dibuat');
    }
   }
)