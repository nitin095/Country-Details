import { Component, OnInit } from '@angular/core';
import { faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faGlobe = faGlobe;
  faSearch = faSearch;

  constructor() { 
    console.log('home component constructor called')
  }

  ngOnInit() {
  }

}
