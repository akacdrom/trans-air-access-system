import { Card, EmployeeInteraction } from "./EmployeeInteraction";

export class StorageZoneLogger implements EmployeeInteraction {
  storageZoneEmployeeCardInfo: Card[] = [];
  storageEmployeeNumber = 0;

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
  removeEmployee(cardNo: number): void {
    if (this.storageEmployeeNumber === 0) {
      throw new Error("There is no employee to remove").message.toUpperCase();
    } else {
      this.storageEmployeeNumber--;
      this.storageZoneEmployeeCardInfo.forEach((value, index) => {
        if (value.cardNo === cardNo) {
          this.storageZoneEmployeeCardInfo.splice(index, 1);
          console.log(index);
        }
      });
    }
  }
  getEmployee(): Card[] {
    return this.storageZoneEmployeeCardInfo;
  }
}
