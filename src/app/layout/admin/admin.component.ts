import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { HeaderComponent } from './header/header.component'; 


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      response => {
        console.log('API Response:', response);
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
