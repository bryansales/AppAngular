import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(value.length === 0 || args === undefined ){
    
      return value;

  }

  let filters = args.toLocaleLowerCase();
  return value.filter(
     (C:string) => C.toLocaleLowerCase().indexOf(filters) != -1
    
  )



}
}
