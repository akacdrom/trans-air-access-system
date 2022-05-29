import { CardCreator } from "./card/CardCreator";
import { Door } from "./door/Door";

export class Employees {
  // employee function to create objects of card, zone and zone
  employee() {
    const card = CardCreator.createCard({
      cardNo: 22,
      cardName: "Joe",
      cardType: "manager",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }
  employee2() {
    const card = CardCreator.createCard({
      cardNo: 1128,
      cardName: "Kit",
      cardType: "janitor",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }

  employee3() {
    const card = CardCreator.createCard({
      cardNo: 1032,
      cardName: "Bob",
      cardType: "janitor",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }

  employee4() {
    const card = CardCreator.createCard({
      cardNo: 230,
      cardName: "Pete",
      cardType: "sorter",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }

  employee5() {
    const card = CardCreator.createCard({
      cardNo: 412,
      cardName: "Dan",
      cardType: "sorter",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }

  employee6() {
    const card = CardCreator.createCard({
      cardNo: 351,
      cardName: "Matt",
      cardType: "sorter",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }
  employee7() {
    const card = CardCreator.createCard({
      cardNo: 254,
      cardName: "Steve",
      cardType: "sorter",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }
  employee8() {
    const card = CardCreator.createCard({
      cardNo: 123,
      cardName: "Bim",
      cardType: "airStrip",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }
  employee9() {
    const card = CardCreator.createCard({
      cardNo: 107,
      cardName: "Tim",
      cardType: "airStrip",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }
  employee10() {
    const card = CardCreator.createCard({
      cardNo: 186,
      cardName: "Amy",
      cardType: "airStrip",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }
  employee11() {
    const card = CardCreator.createCard({
      cardNo: 665,
      cardName: "Mario",
      cardType: "transporter",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }
  employee12() {
    const card = CardCreator.createCard({
      cardNo: 725,
      cardName: "Polly",
      cardType: "transporter",
    });
    const door = new Door();
    const zone = {
      zoneName: (<any>door.getCurrentState()).constructor.name,
      zoneEmployeeCard: card.cardType,
    };
    return { card, door, zone };
  }
}
