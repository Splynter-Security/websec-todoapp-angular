import { Injectable } from '@angular/core';

export interface TodoItem {
  description: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: TodoItem[] = [];

  constructor() {}

  addTodoItem(item: TodoItem) {
    this.todos.push(item);
  }

  getTodoItems(): TodoItem[] {
    return this.todos;
  }

  removeTodoItem(todo: TodoItem) {
    const i = this.todos.indexOf(todo)

    this.todos.splice(i, 1)
  }
}
