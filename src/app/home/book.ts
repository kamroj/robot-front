export class Book {
  id: number;
  title: string;
  subtitle: string;
  authors: string;
  price: string;
  promotionalPrice: string;
  url: string;
  image: string;
  bookstore: string;

  constructor(id: number, title: string, subtitle: string, authors: string, price: string, promotionalPrice: string, url: string, image: string, bookstore: string) {
    this.id = id;
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
