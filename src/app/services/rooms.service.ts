import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { IRoomList } from '../interfaces/rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private http: HttpClient) {}

  getRooms() {
    return this.http.get<IRoomList[]>('/api/roomsList');
  }
  addRoom(room: IRoomList) {
    return this.http.post<IRoomList>('/api/roomsList', room);
  }
  updateRoom(room: IRoomList) {
    return this.http.put<IRoomList>(`/api/roomsList/${room.id}`, room);
  }
  deleteRoom(id: number | undefined) {
    return this.http.delete<IRoomList>(`/api/roomsList/${id}`);
  }
}
