import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl = "https://restcountries.eu/rest/v2";

  constructor(public _http:HttpClient) { 
    console.log('http service called')
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Handle error Http call');
    console.log(err.message);
    return Observable.throw(err.message)
  }

  public getRegion(region): any  {
    let response = this._http.get(this.baseUrl+'/region/'+region+'?fields=name;alpha3Code;flag;capital;population;currencies;languages');
    return response
  }

  public getCountry(code): any {
    let response = this._http.get(this.baseUrl+'/alpha/'+code);
    return response
  }

}
