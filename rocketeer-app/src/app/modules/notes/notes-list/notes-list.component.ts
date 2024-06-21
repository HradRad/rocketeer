import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../api/data.service';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { Note } from '../../../model/note';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [MatTableModule, RouterLink, MatButton],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent implements OnInit {

  dataSource: Note[] = [];
  displayedColumns: string[] = ['id', 'title'];


  constructor(private dataService: DataService,
              public router: Router) {

  }

  ngOnInit(): void {
    this.dataService.getNotesList().subscribe({
      next: (response) => {
        this.dataSource = response;
        console.log(this.dataSource);
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    });
  }
}
