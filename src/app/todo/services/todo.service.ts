import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoSignal = signal<TodoInterface[]>([]);
  filterSignal = signal<FilterEnum>(FilterEnum.all);

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
    this.todoSignal.update((todos) => [...todos, newTodo]);
  }

  updateFilter = (filterType: FilterEnum) => {
    this.filterSignal.set(filterType);
  };

  updateTodo = (id: string, text: string) => {
    console.log('test');
    this.todoSignal.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    );
  };

  toggleCompleted = (id: string) => {
    console.log('test');
    this.todoSignal.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  removeTodo = (id: string) => {
    this.todoSignal.update((todos) => todos.filter((todo) => todo.id !== id));
  };
}
