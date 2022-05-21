export interface Card {
  cardNo: number;
  cardName: string;
  cardType: string;
}

export class ConcreteCard implements Card {
  cardName: string;
  cardNo: number;
  cardType: string;
}
