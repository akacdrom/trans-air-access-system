import { Card, EmployeeInteraction } from "./EmployeeInteraction";

export class LoadUnloadZoneLogger implements EmployeeInteraction {
  loadUnloadZoneEmployeeCardInfo: Card[] = [];
  loadUnloadEmployeeNumber = 0;
  static isNonJanitorPresent = false;
  addEmployee(cardInfo: {
    cardNo: number;
    cardName: string;
    cardType: string;
  }): void {
    this.loadUnloadEmployeeNumber++;
    this.loadUnloadZoneEmployeeCardInfo.push(cardInfo);
    if (cardInfo.cardType !== "janitor") {
      this.setNonJanitorPresent(true);
    }
  }
  removeEmployee(cardNo: number): void {
    if (this.loadUnloadEmployeeNumber === 0) {
      throw new Error("There is no employee to remove").message.toUpperCase();
    } else {
      this.loadUnloadEmployeeNumber--;
      this.loadUnloadZoneEmployeeCardInfo.forEach((value, index) => {
        if (value.cardNo === cardNo) {
          this.loadUnloadZoneEmployeeCardInfo.splice(index, 1);
        }
      });
    }
  }
  getEmployee(): Card[] {
    return this.loadUnloadZoneEmployeeCardInfo;
  }
  setNonJanitorPresent(status: boolean) {
    LoadUnloadZoneLogger.isNonJanitorPresent = status;
  }
  static getNonJanitorPresent() {
    return LoadUnloadZoneLogger.isNonJanitorPresent;
  }
}
