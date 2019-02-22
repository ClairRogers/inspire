import ImageService from "./image-service.js";

var _is = new ImageService()

function drawImage() {
  let image = _is.Image
  document.getElementById('bg-image').setAttribute('background', image.getTemplate())
}


export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawImage)
    _is.getImage()
  }
}

