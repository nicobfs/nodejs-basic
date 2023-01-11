// TODO 1 : buat atau impor variabel EventEmitter dari core module events.
const {EventEmitter} = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

// TODO 2 : buat variabel myEmitter yang merupakan instance dari EvenEmitter
const myEmitter = new EventEmitter();

// TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event 'birthday' dibangkitkan pada myEmitter.
myEmitter.on('birthday', birthdayEventListener);

// TODO 4 : bangkitkanlah event 'birthday' pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama anda.
myEmitter.emit('birthday','Nico');

// running : node ./events/index.js
//output : Happy birthday Nico!