import { ConcreteZone } from "./ConcreteZone";

export class StorageZone extends ConcreteZone {
  constructor(zoneName: string) {
    super();
    this.zoneName = zoneName;
    if (this.storageEmployeeNumber === undefined) {
      this.storageEmployeeNumber = 0;
    }
  }
  enterZone(): number {
    if (this.storageEmployeeNumber < 3) {
      console.log(`Access granted, entered the ${this.zoneName} zone`);
      this.storageEmployeeNumber++;
      return this.storageEmployeeNumber;
    } else {
      throw new Error(
        `Limit is reached. Zone has ${this.sortingEmployeeNumber} number of employees.`
      );
    }
  }
  leaveZone(): void {
    this.storageEmployeeNumber--;
  }
}
