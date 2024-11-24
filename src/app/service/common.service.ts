import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getLocal(name: string) {
    let data: any = localStorage.getItem(name);
    return JSON.parse(data) || [];
  }

  saveLocal(name: string, data: any) {
    localStorage.setItem(name, JSON.stringify(data));
  }
}
