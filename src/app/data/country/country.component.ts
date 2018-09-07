import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from '../../http.service';
import { faLanguage, faUsers, faMap, faCoins, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { CountryData } from './../../CountryData';
import { Translation } from './translation';
import { Border } from './border'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [Location]
})

export class CountryComponent implements OnInit, CountryData {

  faLanguage = faLanguage;
  faUsers = faUsers;
  faMap = faMap;
  faCoins = faCoins;
  faMapMarkedAlt = faMapMarkedAlt;
  public country: any;
  public bordersName: any;
  public translations: any = [];

  constructor(private _route: ActivatedRoute, public router: Router, public httpService: HttpService, private location: Location) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let countryCode = this._route.snapshot.paramMap.get('code');
      this.translations = new Array;
      this.getCountry(countryCode)
    });
  }
  // end ngOnInit

  public getCountry: any = (code) => {
    this.httpService.getCountry(code).subscribe(
      data => {
        this.country = data;
        console.log(data)
        //stroing translations object key value pairs in array as ngFor can't iterate over objects
        for (let language of Object.keys(this.country.translations)) {
          let translationObj: Translation = {
            lang: language,
            translation: this.country.translations[language]
          }
          this.translations.push(translationObj)
        }
        this.getBordersName(this.country.borders)
      },
      error => {
        console.log(error.errorMessage)
      }
    );
  }
  // end getCountry

  public getBordersName: any = (borders) => {
    this.bordersName = new Array;
    for (let border of borders) {
      this.httpService.getCountry(border).subscribe(
        data => {
          let borderObj: Border = {
            name: data.name,
            code: data.alpha3Code
          }
          this.bordersName.push(borderObj)
        },
        error => {
          console.log(error.errorMessage)
        }
      )
    }
    // end for
  }
  // end getBordersName

}
// end class CountryComponent

