import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from '../../http.service';
import { CountriesData } from './countriesData';
import { Population } from './population'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [Location]
})
export class CountriesComponent implements OnInit, CountriesData {

  public filter: string;
  public id: any;
  public region: string;
  public countries: any;
  public population: number;
  public lowestPopulationCountry: Population;
  public highestPopulationCountry: Population;
  public languages: any;
  public selectedCurrency: string;
  public sortField: any;
  public languageModel: any;
  public searchInput: any;

  constructor(private _route: ActivatedRoute, public router: Router, public httpService: HttpService, private location: Location) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.region = this.sortField = this.languageModel = this.searchInput = undefined;
      this.filter = this._route.snapshot.paramMap.get('filter');
      this.id = this._route.snapshot.paramMap.get('id');
      if (this.filter == 'region') {
        this.region = this.id;
        this.getRegion();
      } else if (this.filter == 'language') {
        console.log('language filter')
        this.getAllCountriesWithLanguage()
      } else if (this.filter == 'currency') {
        console.log('currency filter')
        this.getAllCountriesWithCurrency()
      } else {
        console.log('bloc filter')
        this.getAllCountriesWithBloc()
      }
    });
  }
  // end ngOnInit

  public getRegion: any = () => {
    this.httpService.getRegion(this.region).subscribe(
      data => {
        this.countries = data;
        this.getStats(this.countries);
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
  // end getRegion

  public getAllCountriesWithLanguage: any = () => {
    this.httpService.getAllCountriesWithLanguage(this.id).subscribe(
      data => {
        this.countries = data;
        this.getStats(this.countries);
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
  // end getAllCountriesWithLanguage

  public getAllCountriesWithCurrency: any = () => {
    this.httpService.getAllCountriesWithCurrency(this.id).subscribe(
      data => {
        this.countries = data;
        this.getStats(this.countries);
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
  // end getAllCountriesWithCurrency

  public getAllCountriesWithBloc: any = () => {
    this.httpService.getAllCountriesWithBloc(this.id).subscribe(
      data => {
        this.countries = data;
        this.getStats(this.countries);
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
  // end getAllCountriesWithBloc

  public getStats: any = (countries: any) => {
    this.population = 0;
    let maxPopulation = Math.max(...countries.map(o => o.population));
    let minPopulation = Math.min(...countries.map(c => c.population));
    let allLanguages: Array<string> = [];
    for (let country of countries) {
      this.population += country.population;
      for (let l of country.languages) {
        allLanguages.push(l.name);
      }
      if (country.population == maxPopulation) {
        let highestPopulation: Population = { name: country.name, population: maxPopulation }
        this.highestPopulationCountry = highestPopulation
      }
      if (country.population == minPopulation) {
        let lowestPopulation: Population = { name: country.name, population: minPopulation }
        this.lowestPopulationCountry = lowestPopulation
      }
    }
    this.languages = new Set(allLanguages)
    console.log(this.languages)
  }
  // end getStats

  public sortBy: any = (field: string) => {
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
// end class CountriesComponent
