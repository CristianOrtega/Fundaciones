import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date): string {
    let dateFormated = '';
    if (value) {
      dateFormated = value.toString().split(' ')[0];
    }
    return dateFormated;
  }

}
