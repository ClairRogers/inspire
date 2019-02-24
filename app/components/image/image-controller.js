import ImageService from "./image-service.js";

var _is = new ImageService()

function drawImage() {
  let image = _is.Image
  document.getElementById('bg-image').setAttribute('background', image.getTemplate())
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var session = 'AM'
  m = checkTime(m);
  s = checkTime(s);

  if (h <= 12) {
    document.getElementById('welcome').innerText = 'Good Morning'
  } else if (h <= 18) {
    document.getElementById('welcome').innerText = 'Good Afternoon'
  } else {
    document.getElementById('welcome').innerText = 'Good Evening'
  }

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  document.getElementById('clock').innerHTML = `<h1 class="big">${h}:${m} ${session}</h1>`
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}


export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawImage)
    _is.getImage()
    startTime()
  }
}

