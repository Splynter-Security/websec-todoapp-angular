import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  newTodo: TodoItem = { description: '', url: '' };
  todos: TodoItem[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodoItems();
  }

  addTodo(): void {
    if (this.newTodo.description && this.newTodo.url) {
      this.todoService.addTodoItem(this.newTodo);
      this.newTodo = { description: '', url: '' };
    }
  }

  removeTodo(todo: TodoItem): void {
    console.log(todo)
    this.todoService.removeTodoItem(todo);
  }
}