import { Component, Input, OnInit } from '@angular/core';

interface Note {
  id: string;
  description: string;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: Note = { id: '', description: '' };
  @Input() removeNote: (id: string) => void;

  constructor() {
    this.removeNote = Function;
  }

  ngOnInit(): void {
  }

  onDelete(id: string){
    console.log('id=', id);
    this.removeNote(id);
  }

}
