export class Book {
  title: string;
  subtitle: string;
  authors: string;
  price: string;
  promotion: string;
  href: string;
  img: string;
  bookstore: string;

  // tslint:disable-next-line: max-line-length
  constructor(title: string, subtitle: string, authors: string, price: string, promotion: string, href: string, img: string, bookstore: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.price = price;
    this.authors = authors;
    this.promotion = promotion;
    this.href = href;
    this.img = img;
    this.bookstore = bookstore;
  }
}
