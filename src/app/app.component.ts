import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RoomsComponent } from './components/rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit , AfterViewInit {
  title = 'hotelApp';

  // @ViewChild('name', {static:true}) name!: ElementRef;


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }
}
