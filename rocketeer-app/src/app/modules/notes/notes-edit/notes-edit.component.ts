import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../../model/note';
import { DataService } from '../../../api/data.service';
import { MatCardActions, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-notes-edit',
  standalone: true,
  imports: [MatCardActions, MatCard, MatCardContent, MatCardHeader, MatCardTitle,
    MatError, MatLabel, MatFormField, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    MatCardSubtitle, MatButton,
    CommonModule
  ],
  templateUrl: './notes-edit.component.html',
  styleUrl: './notes-edit.component.scss'
})
export class NotesEditComponent implements OnInit {
  noteForm: FormGroup;
  note: Note | null = null;
  noteId: string | null = '';


  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
    });


  }

  ngOnInit(): void {
    this.note = null;

    this.route.paramMap.subscribe(params => {
      this.noteId = params.get('id');
    });

    if (this.noteId != null) {
      this.dataService
        .getNote(Number(this.noteId))
        .subscribe({
          next: (response) => {
            this.note = response;
            console.log('get single NOTE for edit');
            console.log(response);
          },
          error: (error) => {
            console.error('Error fetching data', error);
          }
        });
    }
  }

  saveNote(): void {
    if (this.noteForm.valid) {
      if (this.note && this.noteId !== null) {
        // editing existing
        console.log('editing existing');
        this.dataService
          .updateNote(this.noteForm.value.id, this.noteForm.value.title)
          .subscribe({
            next: (response) => {
              this.router.navigate(['' + response.id]);
            },
            error: (error) => {
              console.error('Error fetching data', error);
            }
          });
      } else {
        
    console.log('creating new');
        // creating new
        this.dataService
          .createNote(this.noteForm.value.title)
          .subscribe({
            next: (response) => {
              this.router.navigate(['' + response.id]);
            },
            error: (error) => {
              console.error('Error fetching data', error);
            }
          });

      }

    }



  }

  cancel(): void {
    this.router.navigate(['']);
  }
}