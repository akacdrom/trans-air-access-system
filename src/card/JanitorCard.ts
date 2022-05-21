import { ConcreteCard } from "./ConcreteCard";

export class JanitorCard extends ConcreteCard {
  constructor(cardNo: number, cardName: string, cardType: string) {
    super();
    this.cardNo = cardNo;
    this.cardType = cardType;
    this.cardName = cardName;
  }
}
