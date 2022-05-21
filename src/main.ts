import { CardCreator } from "./card/CardCreator";
import { ZoneCreator } from "./zone/ZoneCreator";
import { OutsideZoneState, Door } from "./zone/door/Door";

const door = new Door();
//Outside zone as default
console.log((<any>door.getCurrentState()).constructor.name);

//door.getCurrentState().doorZero();
// The Client
const cardObject = { cardNo: 150, cardName: "Joe", cardType: "airstrip" };
const card = CardCreator.createCard(cardObject);
// console.log(card.cardName);
// console.log(card.cardNo);
// console.log(card.cardType);

const zoneObject = {
  zoneName: (<any>door.getCurrentState()).constructor.name,
  zoneEmployeeCard: card.cardType,
};

const zone = ZoneCreator.createZone(zoneObject);
console.log(zone.zoneEmployeeNumber);
console.log(zone);
zoneObject.zoneName = "loadUnload";
