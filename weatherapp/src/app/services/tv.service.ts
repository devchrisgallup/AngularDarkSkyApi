import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable() 
export class TvService {
    public dataUrl: string; 
    constructor(private http: Http) {
    }

    // get data
    getData(lat, long) {
        this.dataUrl = 'proxeyserver?lat=' + lat + '&long=' + long;
        return this.http.get(this.dataUrl)
        .map(data => data.json());  
    }
}
