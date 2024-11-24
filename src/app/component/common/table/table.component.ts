import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() header: Array<string> = []
  @Input() body: Array<any> = [];
  @Input() bodyKey: Array<any> = [];
  @Output() action = new EventEmitter();

  delete = faTrash;

  remove(obj: any) {
    this.action.emit(obj);
  }

}
