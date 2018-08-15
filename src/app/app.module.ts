import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { HttpService } from './http.service';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LanguageNamePipe } from './language-name.pipe';
import { NumberToMBPipe } from './number-to-mb.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    CountryComponent,
    LanguageNamePipe,
    NumberToMBPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'countries/:region', component: CountriesComponent},
      { path:'country/:code', component: CountryComponent}
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
