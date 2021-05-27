import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Record } from '../../interfaces/record';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordComponent implements OnInit {
  @Input() record: Record;
  recordType = ['help', 'warning', 'computer', 'notifications', 'router'];
  constructor() { }

  ngOnInit(): void {
    this.record.record_type
  }

}
