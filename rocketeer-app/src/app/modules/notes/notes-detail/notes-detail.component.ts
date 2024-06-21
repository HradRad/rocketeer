import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../../model/note';
import { DataService } from '../../../api/data.service';
import { MatCardActions, MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-notes-detail',
  standalone: true,
  imports: [MatCardActions, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatButton, CommonModule],
  templateUrl: './notes-detail.component.html',
  styleUrl: './notes-detail.component.scss'
})
export class NotesDetailComponent implements OnInit {

  note: Note | null = null;
  noteId: number = 0;


  constructor(private route: ActivatedRoute,
              public router: Router,
              private dataService: DataService) { 
                
    this.route.paramMap.subscribe(params => {
      this.noteId = Number(params.get('id'));
    });

  }

  ngOnInit(): void {
    this.dataService
      .getNote(this.noteId)
      .subscribe({
        next: (response) => {
          this.note = response;
          console.log('get single NOTE');
          console.log(response);
        },
        error: (error) => {
          console.error('Error fetching data',error);
        }
      });
  
  }

  deleteNote() { // Confirmation page?
    this.dataService.removeNote(this.noteId).subscribe({
      next: () => {
        this.router.navigateByUrl("/");
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    })
  }

  editNote() {
    this.router.navigateByUrl("/" + this.noteId + "/edit")
  }


}
