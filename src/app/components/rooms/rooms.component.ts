import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IRoom, IRoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit , AfterViewInit{
  rooms: IRoom = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 10,
  };

  @ViewChildren(HeaderComponent) headerChildrenComponents!: QueryList<HeaderComponent>;

  roomList: IRoomList[] = [];

  selectedRoom!: IRoomList;

  constructor() {}

  ngOnInit(): void {

    this.roomList = [
      {
        roomNbr: 1,
        roomType: 'Deluxe Room',
        amenties: 'Air conditioner ,  Free Wifi  , Bathroom , Kitchen ',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
      },
      {
        roomNbr: 2,
        roomType: 'Good Room',
        amenties: 'Air conditioner ,  Free Wifi  , Bathroom , Kitchen ',
        price: 1000,
        photos:
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
      },
      {
        roomNbr: 3,
        roomType: 'Private Suite',
        amenties: 'Air conditioner ,  paied Wifi  , Living room , Kitchen ',
        price: 2000,
        photos:
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
      },
    ];
  }

  ngAfterViewInit(): void {
    
    this.headerChildrenComponents.forEach(e=>{
      e.title = "hello header title"
    })
    // console.log(this.headerChildrenComponents)
  }
  addRoom() {
    const room: IRoomList = {
      roomNbr: this.roomList[this.roomList.length - 1].roomNbr + 1,
      roomType: 'Deluxe Room',
      amenties: 'Air conditioner ,  Free Wifi  , Bathroom , Kitchen ',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
    };

    // this approach to overcome mutablity of the roomList Array for changedetection.push
    this.roomList = [...this.roomList, room];
    // this is normal way
    // this.roomList.push(room)
  }
  selectRoom(room: IRoomList): void {
    this.selectedRoom = room;
  }
}
