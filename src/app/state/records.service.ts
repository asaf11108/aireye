import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RecordsStore } from './records.store';

@Injectable({ providedIn: 'root' })
export class RecordsService {

  constructor(private recordsStore: RecordsStore, private apiService: ApiService) {
  }

  get() {
    return this.apiService.getRecords().pipe(tap(entities => {
      entities.forEach(entity => {
        if (!entity.hasOwnProperty('id')) {
          entity.id = entity.mac;
        }
      })
      this.recordsStore.set(entities);
    }));
  }
}
