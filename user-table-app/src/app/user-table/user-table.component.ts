import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../services/user.service';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-user-table',
  imports: [CommonModule, TableModule, FormsModule, InputTextModule],
  templateUrl: 'user-table.component.html',
  styleUrls: ['user-table.component.css'],
})

export class UserTableComponent {
  @Input() users: User[] = [];
  filterValue: string = '';

  get filteredUsers(): User[] {
    const filter = this.filterValue.toLowerCase();
    return this.users.filter(user =>
      user.name.toLowerCase().includes(filter) ||
      user.address.city.toLowerCase().includes(filter)
    );
  }
}

