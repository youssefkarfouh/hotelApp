import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { IRoomList } from './interfaces/rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  test = true;
  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {} 

  change() {
    this.test = !this.test;
  }
}
