import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-todos',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './all-todos.component.html',
  styleUrl: './all-todos.component.scss'
})
export class AllTodosComponent implements OnInit{
  todos: any = [];
  error: string = '';
  constructor(public AuthService: AuthService) { }

  async ngOnInit() {
    try {
      this.todos = await this.AuthService.laodTodos();
      console.log(this.todos)
    } catch(e) {
      this.error = 'Fehler beim Laden';
    }
  }

}
