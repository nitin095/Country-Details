import { Component, OnInit } from '@angular/core';
import { faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faGlobe = faGlobe;
  faSearch = faSearch;
  public activeSearchType: string;
  public searchResult: any;
  public searchText: string;

  constructor(public httpService: HttpService) {
    console.log('home component constructor called')
  }

  ngOnInit() {
    this.activeSearchType = 'name';
  }

  isActive = (type) => {
    if (this.activeSearchType == type)
      return true
  }

  makeActive = (type) => {
    this.activeSearchType = type
  }

  getCountry = (searchType, search) => {
    this.setSearchText(searchType, search);
    this.httpService.getCountryBySearch(searchType, search).subscribe(
      data => {
        if (searchType == 'alpha')
          this.searchResult = [data]
        else
          this.searchResult = data;
        console.log(this.searchResult)
      },
      error => {
        this.searchResult = ['not found']
        console.log(error.errorMessage)
      }
    );
  }
  // end getCountry

  setSearchText = (type, search) => {
    if (type == 'alpha')
      this.searchText = `country code "${search}"`
    else if (type == 'lang')
      this.searchText = `language "${search}"`
    else if (type == 'callingcode')
      this.searchText = `calling code "${search}"`
    else
      this.searchText = `${type} "${search}"`
  }

}
