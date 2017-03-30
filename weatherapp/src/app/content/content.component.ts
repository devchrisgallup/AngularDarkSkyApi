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
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(this.dataUrl)
             .subscribe(data => this.users = data.json());
  }

  processData() {
    console.log(this.users); 
  }
}
