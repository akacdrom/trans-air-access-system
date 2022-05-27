import { Card, EmployeeInteraction } from "./EmployeeInteraction";

export class StorageZoneLogger implements EmployeeInteraction {
  storageZoneEmployeeCardInfo: Card[] = [];
  storageEmployeeNumber: number | undefined;

  addEmployee(cardInfo: {
    cardNo: number;
    cardName: string;
    cardType: string;
  }): void {
    if (this.storageEmployeeNumber === undefined) {
      this.storageEmployeeNumber = 1;
    } else {
      this.storageEmployeeNumber++;
    }
    this.storageZoneEmployeeCardInfo.push(cardInfo);
  }
  removeEmployee(): void {
    if (
      this.storageEmployeeNumber === undefined ||
      this.storageEmployeeNumber === 0
    ) {
      throw new Error("There is no employee to remove").message.toUpperCase();
    } else {
      this.storageEmployeeNumber--;
    }
  }
  getEmployee(): Card[] {
    return this.storageZoneEmployeeCardInfo;
  }
}
