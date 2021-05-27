import { RecordsService } from './state/records.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private recordsService: RecordsService) {}
  
  ngOnInit(): void {
    this.recordsService.get().subscribe();
  }
}
