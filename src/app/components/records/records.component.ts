import { RecordsQuery } from './../../state/records.query';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from '../../interfaces/record';
import { FILTERS_TYPES, FilterType } from './filter-types.settings';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordsComponent implements OnInit {
  filterTypes = FILTERS_TYPES;

  checkedFilterTypes: string[];

  records$: Observable<Record[]>

  constructor(private recordsQuery: RecordsQuery) {}
  
  
  ngOnInit(): void {
    this.records$ = this.recordsQuery.selectAll();
    this.buildCheckedFilterTypes();
  }

  onFilterClick(recordTypeFilter: FilterType, checked: boolean) {
    recordTypeFilter.checked = checked;
    this.buildCheckedFilterTypes();

  }

  private buildCheckedFilterTypes() {
    this.checkedFilterTypes = this.filterTypes
    .filter(recordTypeFilter => recordTypeFilter.checked)
    .map(recordTypeFilter => recordTypeFilter.value);
  }

  trackByFn(record: Record): string {
    return record.id
  }

}
