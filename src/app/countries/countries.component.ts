import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [Location]
})
export class CountriesComponent implements OnInit {

  public filter: string;
  public region: string;
  public countries: any;
  public population: number;
  public lowestPopulationCountry: any;
  public highestPopulationCountry: any;
  public languages: any;
  public selectedCurrency: string;

  constructor(private _route: ActivatedRoute, public router: Router, public httpService: HttpService, private location: Location) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.filter = this._route.snapshot.paramMap.get('filter');
      if (this.filter.length == 2) {
        console.log('language filter')
        this.httpService.getAllCountriesWithLanguage(this.filter).subscribe(
          data => {
            this.countries = data;
            this.getStats(this.countries);
          },
          error => {
            console.log(error.errorMessage)
          }
        )
      } else if (this.filter.length == 3) {
        console.log('currency filter')
        this.httpService.getAllCountriesWithCurrency(this.filter).subscribe(
          data => {
            this.countries = data;
            this.getStats(this.countries);
          },
          error => {
            console.log(error.errorMessage)
          }
        )
      } else {
        this.region = this.filter;
        this.httpService.getRegion(this.filter).subscribe(
          data => {
            this.countries = data;
            this.getStats(this.countries);
          },
          error => {
            console.log(error.errorMessage)
          }
        )
      }
    });
  }
  // end ngOnInit

  getStats = (countries: any) => {
    this.population = 0;
    let maxPopulation = Math.max(...countries.map(o => o.population));
    let minPopulation = Math.min(...countries.map(c => c.population));
    let allLanguages = [];
    for (let country of countries) {
      this.population += country.population;
      for (let l of country.languages) {
        allLanguages.push(l.name);
      }
      if (country.population == maxPopulation) {
        this.highestPopulationCountry = { name: country.name, population: maxPopulation }
      }
      if (country.population == minPopulation) {
        this.lowestPopulationCountry = { name: country.name, population: minPopulation }
      }
    }
    this.languages = new Set(allLanguages)
    console.log(this.languages)
  }
  // end getStats

  sortBy = (field: string) => {
    if (this.countries.length > 1) {
      if (field.endsWith('1')) {
        field = field.slice(0, -1);
        this.countries.sort((a, b) => {
          if (a[field] < b[field]) return 1;
          else if (a[field] > b[field]) return -1;
          else return 0;
        });
      } else {
        this.countries.sort((a, b) => {
          if (a[field] < b[field]) return -1;
          else if (a[field] > b[field]) return 1;
          else return 0;
        });
      }
    }
  }//end sortBy

}
