import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';


@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(books: Array<Book>, minimumPrice: string, maximumPrice: string): any {
    if ( !books || books.length <= 1 || (!minimumPrice && !maximumPrice)) {
      return books;
    }
    if(minimumPrice){
      return books.filter( book => {
        return book['price'].toLowerCase().localeCompare(minimumPrice)>0;
      }).filter(book => {
      return book['price'].toLowerCase().localeCompare(maximumPrice)<0;
  })
    }
    
  }

}
