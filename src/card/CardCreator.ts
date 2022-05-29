import { ManagerCard } from "./ManagerCard";
import { AirStripCard } from "./AirStripCard";
import { SorterCard } from "./SorterCard";
import { TransportCard } from "./TransportCard";
import { JanitorCard } from "./JanitorCard";

import { Card } from "./ConcreteCard";

export class CardCreator {
  static createCard(card: {
    cardNo: number;
    cardName: string;
    cardType: string;
  }): Card {
    if (card.cardType === "manager" && card.cardNo < 100) {
      return new ManagerCard(card.cardNo, card.cardName, card.cardType);
    } else if (
      card.cardType === "airStrip" &&
      card.cardNo >= 100 &&
      card.cardNo < 200
    ) {
      return new AirStripCard(card.cardNo, card.cardName, card.cardType);
    } else if (
      card.cardType === "sorter" &&
      card.cardNo >= 201 &&
      card.cardNo < 500
    ) {
      return new SorterCard(card.cardNo, card.cardName, card.cardType);
    } else if (
      card.cardType === "transporter" &&
      card.cardNo >= 501 &&
      card.cardNo < 999
    ) {
      return new TransportCard(card.cardNo, card.cardName, card.cardType);
    } else if (card.cardType === "janitor" && card.cardNo >= 1000) {
      return new JanitorCard(card.cardNo, card.cardName, card.cardType);
    } else {
      throw new Error("card is not valid").message.toUpperCase();
    }
  }
}
