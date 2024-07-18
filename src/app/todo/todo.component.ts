import { Component, computed, inject } from '@angular/core';
import { TodoService } from './services/todo.service';
import { FilterEnum } from './types/filter.enum';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoCardComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoService = inject(TodoService);
  text: string = '';
  filter = this.todoService.filterSignal();
  filterEnum = FilterEnum;
  editingId: string | null = null;

  visibleTodos = computed(() => {
    const todos = this.todoService.todoSignal();
    const filter = this.todoService.filterSignal();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  });

  activeCount = computed(() => {
    return this.todoService.todoSignal().filter((todo) => !todo.isCompleted)
      .length;
  });

  noTodos = computed(() => this.todoService.todoSignal().length === 0);
  itemsLeft = computed(
    () => `item${this.activeCount() !== 1 ? 's' : ''} remaining`,
  );

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.todoService.addTodo(this.text);
    this.text = '';
  }

  updateFilter = (filterType: FilterEnum) => {
    this.todoService.updateFilter(filterType);
  };

  setEdit = (id: string | null) => {
    this.editingId = id;
  };
}
