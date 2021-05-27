import { RECORD_TYPES } from './record-type.dico';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Record } from '../../interfaces/record';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordComponent implements OnInit {
  RECORD_TYPES = RECORD_TYPES;

  @Input() record: Record;

  constructor() { }

  ngOnInit(): void {
    this.record.record_type
  }

}
