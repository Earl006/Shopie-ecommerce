import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currencySymbol: string = '$', decimalLength: number = 2, chunkDelimiter: string = ',', decimalDelimiter: string = '.'): string {
    if (value == null) {
      return '';
    }

    let [integer, fraction = ''] = value.toFixed(decimalLength).split('.');

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, chunkDelimiter);

    return `${currencySymbol}${integer}${decimalDelimiter}${fraction}`;
  }
}
