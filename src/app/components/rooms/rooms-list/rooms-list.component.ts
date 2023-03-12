import { Component, Input, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { IRoomList } from '../../../interfaces/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
  @Input() roomsList:IRoomList[] = [];

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {}

  deleteRoom(id: number|undefined) {
    this.roomsService.deleteRoom(id).subscribe(() => {
      this.roomsList = this.roomsList.filter(
        (room) => room.id !== id
      );  
    });
  } 

  updateRoom(targetRoom: IRoomList, index: number) {
    const updatedRoom: IRoomList = {
      id: targetRoom.id,
      roomType: 'Deluxe Room',
      amenties: 'Air conditioner ,  Free Wifi  , Bathroom , Kitchen ',
      price: 2,
      photos:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      checkInTime: new Date(),
      checkOutTime: new Date(),
    };

    this.roomsService.updateRoom(updatedRoom).subscribe((data) => {
      this.roomsList[index] = { ...this.roomsList[index], ...data };
    });
  }
}
