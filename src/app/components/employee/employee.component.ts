import { Component, OnInit, Self } from '@angular/core';
import { ProvideAnyService } from 'src/app/services/provide-any.service';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  
  constructor(private service: ProvideAnyService) {}
  ngOnInit(): void {}
}
