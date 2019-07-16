export class Book {
  title: string;
  subtitle: string;
  authors: string;
  price: string;
  promotion: string;

  constructor(title: string, subtitle: string, authors: string, price: string, promotion: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.price = price;
    this.authors = authors;
    this.promotion = promotion;
  }
}
