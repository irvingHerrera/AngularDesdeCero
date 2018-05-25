import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCasa'
})
export class LowerCasaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value as string).toLocaleLowerCase();
  }

}
