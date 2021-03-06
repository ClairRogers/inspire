export default class Todo {
  constructor(data) {
    this._id = data.id || data._id
    this.description = data.description
    this.completed = data.completed

  }
  getTemplate() {
    return `<li onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')"> <span id="${this._id}">${this.description}</span> <span class="ml-2" onclick="app.controllers.todoController.removeTodo('${this._id}')"><i class="fas fa-times"></i></span></li>`
  }
}