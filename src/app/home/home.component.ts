import { Component, OnInit } from '@angular/core';
import { faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../http.service';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

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

  constructor(public httpService: HttpService, private _scrollToService: ScrollToService) {
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

  getPlaceholderText = (type) => {
    if (type == 'name')
      return 'name'
    if (type == 'alpha')
      return `country code. Eg. 'IND' for India`
    if (type == 'currency')
      return `currency code. Eg. 'INR' for Indian National Rupee`
    if (type == 'lang')
      return `language code. Eg. 'HI' for Hindi`
    if (type == 'capital')
      return `capital city. Eg. 'New Delhi' for India`
    if (type == 'callingcode')
      return `calling code. Eg. '91' for India`
  }

  getCountry = (searchType, search) => {
    this.setSearchText(searchType, search);
    this.httpService.getCountryBySearch(searchType, search).subscribe(
      data => {
        if (searchType == 'alpha')
          this.searchResult = [data];
        else
          this.searchResult = data;
        this.scrollToResults();
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

  public scrollToResults() {

    const config: ScrollToConfigOptions = {
      target: 'result',
      offset: -100
    };

    this._scrollToService.scrollTo(config);
  }

}
