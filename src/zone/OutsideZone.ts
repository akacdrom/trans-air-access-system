import { ConcreteZone } from "./ConcreteZone";
export class OutsideZone extends ConcreteZone {
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
    if (this.outsideEmployeeNumber === undefined) {
      this.outsideEmployeeNumber = 0;
    }
  }
  enterZone(): number {
    console.log(`Access granted, entered the ${this.zoneName} zone`);
    this.outsideEmployeeNumber++;
    return this.outsideEmployeeNumber;
  }
  leaveZone(): void {
    this.outsideEmployeeNumber--;
  }
}
