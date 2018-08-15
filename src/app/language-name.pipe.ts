import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageName'
})
export class LanguageNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 'es')
      return 'Spanish'
    if (value == 'de')
      return 'German'
    if (value == 'fr')
      return 'French'
    if (value == 'ja')
      return 'Japanese'
    if (value == 'it')
      return 'Italian'
    if (value == 'br')
      return 'Breton'
    if (value == 'pt')
      return 'Portuguese'
    if (value == 'nl')
      return 'Dutch'
    if (value == 'hr')
      return 'Croatian'
    if (value == 'fa')
      return 'Persian'
    else
      return value
  }

}
