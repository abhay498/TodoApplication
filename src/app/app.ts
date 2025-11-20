import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  item = '';
  list: string[] = [];

  add() {
    if (this.item.trim()) {
      this.list.push(this.item.trim());
      this.item = '';
    }
  }
}
