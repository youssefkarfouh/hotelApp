import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { IRoomList } from '../../interfaces/rooms';
import { ProvideAnyService } from 'src/app/services/provide-any.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  roomsList: IRoomList[] = [];

  constructor(
    private roomsService: RoomsService,
    private service: ProvideAnyService
  ) {}

  // stream = new Observable<string>((observer) => {
  //   observer.next('user1');
  //   observer.next('user2');
  //   observer.next('user3');
  //   observer.complete();
  // });

  ngOnInit(): void {
    // this.stream.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('completed'),
    //   error: (err) => console.log(err),
    // });
    // subscribing to httprequest
    // this.roomsService.getPhotos().subscribe(event=>{
    //     console.log(event);
    // });

    this.roomsService.getRooms().subscribe((data) => {
      this.roomsList = data;
    });
  }
}
