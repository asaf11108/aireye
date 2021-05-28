import { Pipe, PipeTransform } from '@angular/core';
import { Record } from '../interfaces/record';
@Pipe({name: 'filterRecords'})
export class FilterRecordsPipe implements PipeTransform {

    transform(records: Record[], filters: string[]): any[] {
        if (!records || !records.length || !filters.length) {
            return [];
        }
        return records.filter(record => filters.includes(record.record_type));
    }
}