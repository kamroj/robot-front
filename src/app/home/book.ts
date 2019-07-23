export class Book {
  title: string;
  subtitle: string;
  authors: string;
  price: string;
  promotionalPrice: string;
  url: string;
  image: string;
  bookstore: string;

  constructor(title: string, subtitle: string, authors: string, price: string, promotionalPrice: string, url: string, image: string, bookstore: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.price = price;
    this.authors = authors;
    this.promotionalPrice = promotionalPrice;
    this.url = url;
    this.image = image;
    this.bookstore = bookstore;
  }
}
