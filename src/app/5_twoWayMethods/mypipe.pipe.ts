import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hipipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string): string {
    return "hello " + value;
  }

}
