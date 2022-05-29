import { ConcreteCard } from "./ConcreteCard";

export class TransportCard extends ConcreteCard {
  constructor(cardNo: number, cardName: string, cardType: string) {
    super();
    this.cardNo = cardNo;
    this.cardName = cardName;
    this.cardType = cardType;
  }
}
