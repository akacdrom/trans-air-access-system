import { ConcreteCard } from "./ConcreteCard";

export class SorterCard extends ConcreteCard {
  constructor(cardNo: number, cardName: string, cardType: string) {
    super();
    this.cardNo = cardNo;
    this.cardType = cardType;
    this.cardName = cardName;
  }
}
