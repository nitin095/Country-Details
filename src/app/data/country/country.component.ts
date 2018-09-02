import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from '../../http.service';
import { faLanguage, faUsers, faMap, faCoins, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [Location]
})
export class CountryComponent implements OnInit {

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
    this.httpService.getCountry(countryCode).subscribe(
      data => {
        this.country = data;
        console.log(data)
        //stroing translations object key value pairs in array as ngFor can't iterate over objects
        for (let language of Object.keys(this.country.translations)){
            this.translations.push({ lang: language, translation: this.country.translations[language]})
          }
      console.log(this.translations)
      this.getBordersName(this.country.borders)
      },
      error => {
        console.log(error.errorMessage)
      }
    );
  });
  }
  // end ngOnInit

  getBordersName = (borders) => {
    this.bordersName = new Array;
    for(let border of borders){
      this.httpService.getCountry(border).subscribe(
        data => {
          this.bordersName.push({name: data.name, code: data.alpha3Code})
        },
        error => {
          console.log(error.errorMessage)
        }
      )      
    }
    // end for
    console.log(this.bordersName)
  }

}

