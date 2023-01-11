// TODO : tampilkan teks pada notes.txt pada console.
const fs = require ('fs');
const {resolve} = require ('path');

const fileReadCallback = (error, data)=> {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);

//Running : node ./filesystem/index.js
//Output : 
/*Di hari minggu saya akan :
1. Berolahraga pagi.
2. Membersihkan halaman Rumah.
3. Menonton film.
4. Membaca buku Laskar Pelangi.*/

//solved