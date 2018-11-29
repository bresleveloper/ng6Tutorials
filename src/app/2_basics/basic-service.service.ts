import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {

  constructor() { 
    this.o = {a:4, b:5, c:0}
  }

  o:{}

}
