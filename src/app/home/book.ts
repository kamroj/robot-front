export class Book {
  title: string;
  subtitle: string;
  authors: string;
  price: string;

  constructor(title: string, subtitle: string, authors: string, price: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.price = price;
    this.authors = authors;
  }
}
