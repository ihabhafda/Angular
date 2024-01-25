import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  mySendName = new BehaviorSubject <string> ('');

  constructor() { }

  setName(name: string) {
    return this.mySendName.next(name);
  }

  getName(): Observable<string> {
    return this.mySendName.asObservable();
  }
}
