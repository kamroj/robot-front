import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<Book>, searchText: string, searchCategory: string): any {
      if (!items) {
        return items;
      }
      if (!searchText) {
        return items;
      }
      searchText = searchText.toLowerCase();
      return items.filter( it => {
      return it[searchCategory].toLowerCase().includes(searchText);
    });
  }

}
