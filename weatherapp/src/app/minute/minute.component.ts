import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TvService } from 'app/services/tv.service'; 

@Component({
  selector: 'app-minute',
  templateUrl: './minute.component.html',
  styleUrls: ['./minute.component.css']
})
export class MinuteComponent implements OnInit {
  private rainByTheMinute = false; 
  private minnutelyArray; 
  private users;  
  constructor(private service: TvService) { }

  ngOnInit() {
    this.service.getData()
                .subscribe(data => this.users = data);
  }

  processData() {
    // weather by the minute array
    this.minnutelyArray = this.users.minutely.data; 
    // flag to show div
    if (!this.rainByTheMinute) {
      this.rainByTheMinute = true; 
    } else if(this.rainByTheMinute) {
      this.rainByTheMinute = false; 
    }
  }

}
