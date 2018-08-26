import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageName'
})
export class LanguageNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 'en')
      return 'English'
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
    if (value == 'ru')
      return 'Russian'
    if (value == 'la')
      return 'Latin'
    if (value == 'ca')
      return 'Catalian'
    if (value == 'gn')
      return 'Guaraní'
    if (value == 'ar')
      return 'Arabic'
    if (value == 'af')
      return 'Afrikaans'
    if (value == 'sq')
      return 'Albanian'
    if (value == 'br')
      return 'Breton'
    if (value == 'pt')
      return 'Portuguese'
    if (value == 'nl')
      return 'Dutch'
    if (value == 'da')
      return 'Danish'
    if (value == 'hr')
      return 'Croatian'
    if (value == 'fa')
      return 'Persian'
    if (value == 'fi')
      return 'Finnish'
    if (value == 'tk')
      return 'Turkmen'
    if (value == 'ps')
      return 'Pashto'
    if (value == 'uz')
      return 'Uzbek'
    if (value == 'hy')
      return 'Armenian'
    if (value == 'el')
      return 'Greek'
    if (value == 'tr')
      return 'Turkish'
    if (value == 'pa')
      return '(Eastern) Punjabi'
    if (value == 'sm')
      return 'Samoan'
    if (value == 'rw')
      return 'Kinyarwanda'
    if (value == 'sr')
      return 'Serbian'
    if (value == 'sv')
      return 'Swedish'
    if (value == 'sm')
      return 'Samoan'
    if (value == 'ff')
      return 'Fula'
    if (value == 'so')
      return 'Somali'
    if (value == 'ss')
      return 'Swati'
    if (value == 'tn')
      return 'Tswana'
    if (value == 'st')
      return 'Southern Sotho'
    if (value == 'qu')
      return 'Quechua'
    if (value == 'xh')
      return 'Xhosa'
    if (value == 'zu')
      return 'Zulu'
    else
      return value
  }

}
