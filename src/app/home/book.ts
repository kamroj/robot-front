export class Book {
  title: string;
  subtitle: string;
  authors: string;
  price: string;
  promotion: string;
  url: string;
  image: string;
  bookstore: string;

  constructor(title: string, subtitle: string, authors: string, price: string, promotion: string, url: string, image: string, bookstore: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.price = price;
    this.authors = authors;
    this.promotion = promotion;
    this.url = url;
    this.image = image;
    this.bookstore = bookstore;
  }
}
