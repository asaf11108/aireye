import { RecordsQuery } from './../../state/records.query';
import { QueryEntity } from '@datorama/akita';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from '../../interfaces/record';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordsComponent implements OnInit {
  records$: Observable<Record[]>

  constructor(private recordsQuery: RecordsQuery) {}
  
  
  ngOnInit(): void {
    this.records$ = this.recordsQuery.selectAll();
  }

}
