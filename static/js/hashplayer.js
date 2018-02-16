// show debug message
console.log('torrent script load');

// set hash & magneturl
// var hash = $('#hashPlayerCont').getAttribute('hash');
// var magnetUrl = $('#hashPlayerCont').getAttribute('magnet');
var magnetUrl = document.getElementById('hashPlayerCont').getAttribute('magnet').toString();

// debug message
// console.log('hash => ' + hash);
console.log('magnetUrl => ' + magnetUrl);

//init webtorrent
var torrentClient = new WebTorrent({maxConns: 100});

var f;
// file callback function
var fileCallback = function (file) {
  f = file;

  console.log('file callback');
  return file.name.endsWith('.mp4');
}

var t;
// torrent callback function
var torrentCallback = function (torrent) {
  t = torrent;

  console.log('torrent callback');

  //log peers
  torrent.on('wire', function (wire, addr) {
    console.log('peer connect => ' + addr);
  });
  torrent.on('infoHash', function () {
    console.log('info hash fin');
  });
  torrent.on('metadata', function () {
    console.log('metadata fin');
  });
  torrent.on('ready', function () {
    console.log('ready');
  });

  var file = torrent.files.find(fileCallback);
  file.appendTo('#hashPlayerCont');

  document.getElementById('waitTorrent').hidden = true;
}

// attach torrent to element
torrentClient.add(
  // sintel
  // 'https://webtorrent.io/torrents/sintel.torrent',
  // 'https://cors-anywhere.herokuapp.com/https://mikanani.me/Download/20180216/c72a8f63f3ba76797e17911cb19f4610edabc60f.torrent',
  // 'magnet:?xt=urn:btih:c72a8f63f3ba76797e17911cb19f4610edabc60f&tr=http%3a%2f%2f208.67.16.113%3a8000%2fannounce&tr=udp%3a%2f%2f208.67.16.113%3a8000%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=http%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&tr=http%3a%2f%2ftracker.prq.to%2fannounce&tr=http%3a%2f%2ft.acg.rip%3a6699%2fannounce&tr=https%3a%2f%2ftr.bangumi.moe%3a9696%2fannounce&tr=udp%3a%2f%2ftr.bangumi.moe%3a6969%2fannounce&tr=http%3a%2f%2fopen.acgtracker.com%3a1096%2fannounce',
  magnetUrl,
  {maxWebConns: 50},
  torrentCallback
)

