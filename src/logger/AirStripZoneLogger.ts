import { Card, EmployeeInteraction } from "./EmployeeInteraction";

export class AirStripZoneLogger implements EmployeeInteraction {
  airStripZoneEmployeeCardInfo: Card[] = [];
  airStripEmployeeNumber = 0;

  addEmployee(cardInfo: {
    cardNo: number;
    cardName: string;
    cardType: string;
  }): void {
    this.airStripEmployeeNumber++;
    this.airStripZoneEmployeeCardInfo.push(cardInfo);
  }
  removeEmployee(cardNo: number): void {
    if (this.airStripEmployeeNumber === 0) {
      throw new Error("There is no employee to remove").message.toUpperCase();
    } else {
      this.airStripEmployeeNumber--;
      this.airStripZoneEmployeeCardInfo.forEach((value, index) => {
        if (value.cardNo === cardNo) {
          this.airStripZoneEmployeeCardInfo.splice(index, 1);
          console.log(index);
        }
      });
    }
  }
  getEmployee(): Card[] {
    return this.airStripZoneEmployeeCardInfo;
  }
}
