import { CardCreator } from "./card/CardCreator";
import { ZoneCreator } from "./zone/ZoneCreator";
import { OutsideZoneState, Door } from "./door/Door";

//Outside zone as default
const door = new Door();

// The Client
const cardObject = { cardNo: 202, cardName: "Joe", cardType: "sorter" };
const card = CardCreator.createCard(cardObject);
// console.log(card.cardName);
// console.log(card.cardNo);
// console.log(card.cardType);
// console.log(zone.zoneEmployeeNumber);
// console.log(zone.zoneName);

let zoneObject = {
  zoneName: (<any>door.getCurrentState()).constructor.name,
  zoneEmployeeCard: card.cardType,
};

let zone = ZoneCreator.createZone(zoneObject);
console.log("Current Zone Is: " + zone.zoneName);
console.log("");

door.getCurrentState().doorZero();
zone.zoneName = (<any>door.getCurrentState()).constructor.name;
zoneObject.zoneName = zone.zoneName;
zone = ZoneCreator.createZone(zoneObject);
console.log("Current Zone Is: " + zone.zoneName);
console.log("");

door.getCurrentState().doorThree();
zone.zoneName = (<any>door.getCurrentState()).constructor.name;
zoneObject.zoneName = zone.zoneName;
zone = ZoneCreator.createZone(zoneObject);
console.log("Current Zone Is: " + zone.zoneName);
console.log("");

door.getCurrentState().doorSix();
zone.zoneName = (<any>door.getCurrentState()).constructor.name;
zoneObject.zoneName = zone.zoneName;
zone = ZoneCreator.createZone(zoneObject);
console.log("Current Zone Is: " + zone.zoneName);
console.log();
