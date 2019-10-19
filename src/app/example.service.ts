import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  public name: String = 'Example Service';
  public data: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) {

    this.http.get('assets/data.json').subscribe(data => {
      console.log('data loaded ' + data);
      this.data.next(data);
    }, error => console.log('Error Andy'));

  }


}
