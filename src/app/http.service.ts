import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl = "https://restcountries.eu/rest/v2";

  constructor(public _http: HttpClient) {
    console.log('http service called')
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Handle error Http call');
    console.log(err.message);
    return Observable.throw(err.message)
  }

  public getAllCountriesWithLanguage(language): any {
    let response = this._http.get(this.baseUrl + '/lang/' + language);
    return response
  }

  public getAllCountriesWithCurrency(currency): any {
    let response = this._http.get(this.baseUrl + '/currency/' + currency);
    return response
  }

  public getAllCountriesWithBloc(bloc): any {
    let response = this._http.get(this.baseUrl + '/regionalbloc/' + bloc);
    return response
  }

  public getRegion(region): any {
    let response = this._http.get(this.baseUrl + '/region/' + region + '?fields=name;alpha3Code;flag;capital;subregion;population;currencies;languages;timezones');
    return response
  }

  public getCountry(code): any {
    let response = this._http.get(this.baseUrl + '/alpha/' + code);
    return response
  }

  public getCountryBySearch(searchType,search): any {
    let response = this._http.get(`${this.baseUrl}/${searchType}/${search}?fields=name;alpha3Code;flag;subregion`);
    return response
  }

}
