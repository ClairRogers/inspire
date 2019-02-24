export default class Quote {
  constructor(data) {
    this.body = data.quote.body
    this.author = data.quote.author
  }
  getTemplate() {
    return `
    <span class="thequote"><i>"${this.body}"</i></span><span class="author">${this.author}</span>
    `
  }
}
