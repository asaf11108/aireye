import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RecordsStore } from './records.store';
import { HttpClient } from '@angular/common/http';
import { Record } from '../interfaces/record';

@Injectable({ providedIn: 'root' })
export class RecordsService {
  private readonly ENDPOINT = 'https://test-fed.aireye.me/results';

  constructor(private recordsStore: RecordsStore, private http: HttpClient) {
  }

  get(): void {
    this.http.get<Record[]>(this.ENDPOINT).pipe(tap((entities: Record[]) => {
      entities.forEach(entity => {
        if (!entity.hasOwnProperty('id')) {
          entity.id = entity.mac;
        }
        if (entity.timestamp) { 
          entity.timestamp = new Date(entity.timestamp.replace(' ', 'T')).toISOString();
        }
      })
      this.recordsStore.set(entities);
    })).subscribe();
  }
}
