import { Component } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {


  bookingForm!:FormGroup;

  constructor(){

  }

}
