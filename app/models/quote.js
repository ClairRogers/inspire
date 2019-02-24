export default class Quote {
  constructor(data) {
    this.body = data.quote.body
    this.author = data.quote.author
  }
  getTemplate() {
    return `
    <i>"${this.body}"</i>
    `
  }
}