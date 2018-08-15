import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToMB'
})
export class NumberToMBPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // Nine Zeroes for Billions
    return Math.abs(Number(value)) >= 1.0e+9
      ? (Math.abs(Number(value)) / 1.0e+9).toPrecision(3) + "B"

      // Six Zeroes for Millions 
      : Math.abs(Number(value)) >= 1.0e+6
        ? (Math.abs(Number(value)) / 1.0e+6).toPrecision(3) + "M"

        // Three Zeroes for Thousands
        : Math.abs(Number(value)) >= 1.0e+3
          ? (Math.abs(Number(value)) / 1.0e+3).toPrecision(3) + "K"

          : Math.abs(Number(value));
  }

}
