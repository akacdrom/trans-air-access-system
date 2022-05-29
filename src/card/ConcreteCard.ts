export interface Card {
  cardNo: number;
  cardName: string;
  cardType: string;
}

export class ConcreteCard implements Card {
  cardNo: number;
  cardName: string;
  cardType: string;
}
