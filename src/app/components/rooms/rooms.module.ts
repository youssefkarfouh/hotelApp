import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';


import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RoomsBookingComponent,
    RoomAddComponent,
    RoomsComponent,
    RoomsListComponent,
  ],
  imports: [CommonModule, RoomsRoutingModule, FormsModule],
})
export class RoomsModule {}
