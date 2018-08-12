import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService} from '../http.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [Location]
})
export class CountriesComponent implements OnInit {

  public region: string;
  public countries: any;
  public population: number;
  public lowestPopulationCountry: any;
  public highestPopulationCountry: any;
  public languages: any;

  constructor(private _route: ActivatedRoute, public router: Router, public httpService: HttpService, private location: Location) { }

  ngOnInit() {
    this.region = this._route.snapshot.paramMap.get('region');
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

  getStats = (countries:any) => {
    this.population = 0;
    let maxPopulation =  Math.max(...countries.map(o => o.population));
    let minPopulation = Math.min(...countries.map(c => c.population));
    let allLanguages = [];
    for(let country of countries){
      this.population += country.population;
      for(let l of country.languages ){
        allLanguages.push(l.name);
      }
      if(country.population == maxPopulation){
        this.highestPopulationCountry = { name: country.name, population: maxPopulation}
      }
      if(country.population == minPopulation){
        this.lowestPopulationCountry ={ name: country.name, population: minPopulation}
      }
    }
    this.languages = new Set(allLanguages)
    console.log(this.languages)
  }
  // end getStats

}
