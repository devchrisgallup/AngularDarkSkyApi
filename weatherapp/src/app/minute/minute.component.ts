import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TvService } from 'app/services/tv.service'; 

@Component({
  selector: 'app-minute',
  templateUrl: './minute.component.html',
  styleUrls: ['./minute.component.css']
})
export class MinuteComponent implements OnInit {
  public rainByTheMinute = false; 
  public minnutelyArray; 
  public users;  
  public lat; 
  public long;
  constructor(private service: TvService) { }

  ngOnInit() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      }

  }

  setPosition(position) {
      // pass latitude and longitude of device
      // to build query string for call to 
      // proxy server
      this.lat = position.coords.latitude; 
      this.long = position.coords.longitude; 
      this.service.getData(this.lat, this.long)
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
