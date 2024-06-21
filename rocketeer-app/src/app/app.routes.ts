import { Routes } from '@angular/router';
import { NotesListComponent } from './modules/notes/notes-list/notes-list.component';
import { NotesDetailComponent } from './modules/notes/notes-detail/notes-detail.component';
import { NotesEditComponent } from './modules/notes/notes-edit/notes-edit.component';

export const routes: Routes = [
    {'path': '', component: NotesListComponent},
    {'path': 'new', component: NotesEditComponent},
    {'path': ':id', component: NotesDetailComponent},
    {'path': ':id/edit', component: NotesEditComponent}
];
