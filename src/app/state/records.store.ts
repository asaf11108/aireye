import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Record } from '../interfaces/record';

export interface RecordsState extends EntityState<Record> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'records' })
export class RecordsStore extends EntityStore<RecordsState> {

  constructor() {
    super();
  }

}
