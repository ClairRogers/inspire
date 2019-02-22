export default class Image {
  constructor(data) {
    this.url = data.url
    this.id = data.id || data._id
    this.site = data.site
  }
  getTemplate() {
    return `${this.url}`
  }
}