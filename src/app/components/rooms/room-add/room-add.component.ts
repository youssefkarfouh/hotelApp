import { Component, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomsService } from 'src/app/services/rooms.service';
import { IRoomList } from '../../../interfaces/rooms';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss'],
})
export class RoomAddComponent {
  constructor(private roomsService: RoomsService) {}

  alertMsg!: string;
  room: IRoomList = {
    roomType: '',
    amenties: '',
    price: 0,
    photos: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
  };

  addRoom(formData: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      console.log(data);
      
      this.alertMsg = 'Room added succesfully';
      formData.resetForm({
        price : 89
      });
    });
  }
}
