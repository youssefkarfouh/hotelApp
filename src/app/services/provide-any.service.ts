import { Injectable } from '@angular/core';
import { RouteConfig } from './routeConfig';
import { RouteConfigToken } from './routeConfig.service';

@Injectable({
  providedIn: 'any'
})
export class ProvideAnyService {

  constructor() { 
    console.log("provide any service initialized");
    
  }
}
