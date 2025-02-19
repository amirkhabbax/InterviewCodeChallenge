import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianDate',
  standalone:true
})
export class PersianDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;//TODO
  }

}
