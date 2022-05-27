import { Card, EmployeeInteraction } from "./EmployeeInteraction";

export class LoadUnloadZoneLogger implements EmployeeInteraction {
  loadUnloadZoneEmployeeCardInfo: Card[] = [];
  loadUnloadEmployeeNumber = 0;

  addEmployee(cardInfo: {
    cardNo: number;
    cardName: string;
    cardType: string;
  }): void {
    this.loadUnloadEmployeeNumber++;
    this.loadUnloadZoneEmployeeCardInfo.push(cardInfo);
  }
  removeEmployee(): void {
    if (
      this.loadUnloadEmployeeNumber === undefined ||
      this.loadUnloadEmployeeNumber === 0
    ) {
      throw new Error("There is no employee to remove").message.toUpperCase();
    } else {
      this.loadUnloadEmployeeNumber--;
    }
  }
  getEmployee(): Card[] {
    return this.loadUnloadZoneEmployeeCardInfo;
  }
}
