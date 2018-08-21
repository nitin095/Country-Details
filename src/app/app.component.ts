import { Component } from '@angular/core';
import { faSearch, faTimesCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  faSearch = faSearch;
  faTimesCircle = faTimesCircle;
  faEnvelope = faEnvelope;
  faGithubSquare = faGithubSquare;
  public search: any;

  constructor(public httpService: HttpService) {
    console.log('app component constructor called')
  }

  getCountry = (search) => {
    this.httpService.getCountryBySearch('name', search).subscribe(
      data => {
          this.search = data;
        console.log(this.search)
      },
      error => {
        this.search = ['not found']
        console.log(error.errorMessage)
      }
    );
  }
  // end getCountry

}

