/**
 * TODO :
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writeble stream.
 */

const fs = require('fs');
const {resolve} = require ('path');
// __dirname (2 garis bawah)
const readableStream = fs.createReadStream(resolve(__dirname,'input.txt'), {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream(resolve(__dirname,'output.txt'));

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
        //fungsi \n : memberikan baris yg berbeda/selanjutnya.
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    writableStream.end();
});
