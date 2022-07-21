import { Pipe, PipeTransform } from '@angular/core';
import { MoneyFormat } from './money-format';

@Pipe({
  name: 'moneyFormat'
})
export class MoneyFormatPipe implements PipeTransform {

  transform(value: number, currency: any = {}): unknown {
    return MoneyFormat.toWords(value, currency);
  }
}
