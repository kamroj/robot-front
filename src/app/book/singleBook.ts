import { Book } from '../home/book';
import { PriceHistory } from './priceHistory';

export class SingleBook extends Book {
  priceHistory: Array<PriceHistory>;

  constructor(id: number, title: string, subtitle: string, authors: string, image: string, url: string, bookstore: string, priceHistory: Array<PriceHistory>) {
    super(id, title, subtitle, authors, '', '', url, image, bookstore);
    this.bookstore = bookstore;
    this.priceHistory = priceHistory;
  }
}
