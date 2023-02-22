import {ChangeDetectionStrategy,Component,EventEmitter,Input,OnChanges,OnInit,Output,SimpleChanges} from '@angular/core';
import { IRoomList } from '../rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: IRoomList[] = [];
  @Output() selectedRoomEmit = new EventEmitter<IRoomList>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }


  selectRoom(room: IRoomList) {
    this.selectedRoomEmit.emit(room);
  }
}
