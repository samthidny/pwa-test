import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private myDataService: ExampleService) {
    this.myDataService.data.subscribe((data) => {
      this.data = data;
    });
  }

  ngOnInit() {
  
  }

}
