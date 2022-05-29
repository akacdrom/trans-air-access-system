import { ConcreteCard } from "./ConcreteCard";

export class JanitorCard extends ConcreteCard {
  constructor(cardNo: number, cardName: string, cardType: string) {
    super();
    this.cardNo = cardNo;
    this.cardName = cardName;
    this.cardType = cardType;
  }
}
