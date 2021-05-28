import { Observable } from 'rxjs';
import { RecordsQuery } from './../../state/records.query';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Record } from '../../interfaces/record';
import { RECORD_TYPES } from 'src/app/utils/record-type.settings';
import { RecordType } from '../../interfaces/record-type';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordDetailsComponent implements OnInit {
  RECORD_TYPES = RECORD_TYPES;
  RecordType = RecordType;

  activeRecord$: Observable<Record>;

  constructor(private recordsQuery: RecordsQuery) { }

  ngOnInit(): void {
    this.activeRecord$ = this.recordsQuery.selectActive() as Observable<Record>;
  }

}
