import { ConcreteZone } from "./ConcreteZone";
export class OutsideZone extends ConcreteZone {
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
  }
  enterZone(): void {
    console.log(`Access granted, entered the ${this.zoneName} zone`);
  }
}
