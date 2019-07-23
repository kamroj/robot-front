import { Book } from './book';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(items: Array<Book>, column: string, type: boolean): any {
    if ( !items || items.length <= 1 || column === '' || !column) {
      return items;
    }
    if (type === true) {
      return _.orderBy(items, [column], 'asc');
    } else {
      return _.orderBy(items, [column], 'desc');
    }
  }

}
