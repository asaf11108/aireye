import { Observable } from 'rxjs';
import { RecordsQuery } from './../../state/records.query';
import { RecordsStore } from './../../state/records.store';
import { RECORD_TYPES } from '../../utils/record-type.settings';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Record } from '../../interfaces/record';
import { RecordType } from '../../interfaces/record-type';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordComponent implements OnInit {
  RECORD_TYPES = RECORD_TYPES;
  RecordType = RecordType;

  @Input() record: Record;

  isActive$: Observable<boolean>;

  constructor(
    private recordsQuery: RecordsQuery,
    private recordsStore: RecordsStore
    ) { }

  ngOnInit(): void {
    this.record.record_type;
    this.isActive$ = this.recordsQuery.selectActiveId().pipe(map(activeId => activeId === this.record.id));
  }

  onRecordClick(): void {
    this.recordsStore.setActive(this.record.id);
  }

}
