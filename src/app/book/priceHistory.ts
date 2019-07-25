export class PriceHistory {
  retailPrice: string;
  promotionalPrice: string;
  date: string;

  constructor(retailPrice: string, promotionPrice: string, date: string){
    this.retailPrice = retailPrice;
    this.promotionalPrice = promotionPrice;
    this.date = date;
  }
}
