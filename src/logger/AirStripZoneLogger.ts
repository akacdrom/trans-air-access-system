import { Card, EmployeeInteraction } from "./EmployeeInteraction";

export class AirStripZoneLogger implements EmployeeInteraction {
  airStripZoneEmployeeCardInfo: Card[] = [];
  airStripEmployeeNumber: number | undefined;

  addEmployee(cardInfo: {
    cardNo: number;
    cardName: string;
    cardType: string;
  }): void {
    if (this.airStripEmployeeNumber === undefined) {
      this.airStripEmployeeNumber = 1;
    } else {
      this.airStripEmployeeNumber++;
    }
    this.airStripZoneEmployeeCardInfo.push(cardInfo);
  }
  removeEmployee(): void {
    if (
      this.airStripEmployeeNumber === undefined ||
      this.airStripEmployeeNumber === 0
    ) {
      throw new Error("There is no employee to remove").message.toUpperCase();
    } else {
      this.airStripEmployeeNumber--;
    }
  }
  getEmployee(): Card[] {
    return this.airStripZoneEmployeeCardInfo;
  }
}
