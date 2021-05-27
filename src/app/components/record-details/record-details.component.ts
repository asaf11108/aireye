import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
