import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private dataUrl = 'proxy server'; 
  private users; 
  private isNoRain = false; 
  private rainByTheMinute = false; 
  private hourlyArray; 
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(this.dataUrl)
             .subscribe(data => this.users = data.json());
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
