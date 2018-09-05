import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NumberToMBPipe } from '../number-to-mb.pipe';
import { SearchPipe } from '../search.pipe';
import { LanguageNamePipe } from '../language-name.pipe';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'country/:code', component: CountryComponent},
      { path: 'countries/:filter/:id', component: CountriesComponent}
    ]),
    SharedModule
  ],
  declarations: [
    CountryComponent,
    CountriesComponent,
    LanguageNamePipe,
    NumberToMBPipe,
    SearchPipe
  ]
})
export class DataModule { }
