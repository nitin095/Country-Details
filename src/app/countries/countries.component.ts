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

  constructor(private _route: ActivatedRoute, public router: Router, public httpService: HttpService, private location: Location) { }

  ngOnInit() {
    this.region = this._route.snapshot.paramMap.get('region');
    this.httpService.getRegion(this.region).subscribe(
      data => {
        this.countries = data;
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }

}
