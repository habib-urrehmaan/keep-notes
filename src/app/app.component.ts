import { Component } from '@angular/core';

interface Note {
  id: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keep-notes';
  notes: Note[] = [];
  noteInput: string;

  constructor() {
    this.noteInput = "";
  }

  addNote() {
    const r = (Math.random() + 1).toString(36).substring(7);
    const note:Note = { id: r, description: this.noteInput };
    this.notes.push(note);
  }

  removeNote = (id: string) => {
    const filteredNotes = this.notes.filter((note) => note.id !== id);
    this.notes = filteredNotes;
  }
}
