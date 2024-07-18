import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { CommonModule } from '@angular/common';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent implements OnInit {
  @Input({ required: true }) todo!: TodoInterface;
  @Input({ required: true }) isEdit!: boolean;
  @Output() setEdit: EventEmitter<string | null> = new EventEmitter();
  editText: string = '';
  todoService = inject(TodoService);

  ngOnInit(): void {
    this.editText = this.todo.text;
  }

  updateText = (event: Event) => {
    const val = (event.target as HTMLInputElement).value;
    this.editText = val;
  };

  updateTodo = () => {
    this.todoService.updateTodo(this.todo.id, this.editText);
    this.setEdit.emit(null);
  };

  setEditMode = () => {
    this.setEdit.emit(this.todo.id);
  };

  removeTodo = () => {
    this.todoService.removeTodo(this.todo.id);
  };

  toggleCompleted = () => {
    this.todoService.toggleCompleted(this.todo.id);
  };
}
