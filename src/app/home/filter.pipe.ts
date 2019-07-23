import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Array<Book>, searchText: string, searchCategory: string): any {
    if (!books || !searchText) {
      return books;
    }
    return books.filter( book => {
        return book[searchCategory].toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
