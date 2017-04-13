import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TvService } from 'app/services/tv.service'; 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private users; 
  private isNoRain = false; 
  private rainByTheMinute = false; 
  private hourlyArray; 
  constructor(private service: TvService) { }

  ngOnInit() {
    this.service.getData()
                .subscribe(data => this.users = data);
  }

  processData() {
    let counter = 0; 
    this.hourlyArray = this.users.hourly.data;  
    // flag to show div
    if (!this.rainByTheMinute) {
      this.rainByTheMinute = true; 
    } else if(this.rainByTheMinute) {
      this.rainByTheMinute = false; 
    }
    // to check if there is no rain probability
    for (let i = 0; i < this.hourlyArray.length; i++) {
      if (this.hourlyArray[i].precipProbability == 0) {
        counter++; 
      }
    }
    // set flag if no rain probability in the array
    if (counter == this.hourlyArray.length) {
      this.isNoRain = true; 
    }
  }
}
