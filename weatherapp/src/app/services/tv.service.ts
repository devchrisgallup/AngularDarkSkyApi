import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable() 
export class TvService {
    private dataUrl: string = 'Proxy Server';
    constructor(private http: Http) {}
    // get data
    getData() {
        return this.http.get(this.dataUrl)
        .map(data => data.json());  
    }
}
