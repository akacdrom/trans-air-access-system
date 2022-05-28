import { Card, EmployeeInteraction } from "./EmployeeInteraction";

export class OutsideZoneLogger implements EmployeeInteraction {
  outsideZoneEmployeeCardInfo: Card[] = [];
  outsideEmployeeNumber = 0;

  addEmployee(cardInfo: {
    cardNo: number;
    cardName: string;
    cardType: string;
  }): void {
    this.outsideEmployeeNumber++;
    this.outsideZoneEmployeeCardInfo.push(cardInfo);
  }
  removeEmployee(cardNo: number): void {
    if (this.outsideEmployeeNumber === 0) {
      throw new Error("There is no employee to remove").message.toUpperCase();
    } else {
      this.outsideEmployeeNumber--;
      this.outsideZoneEmployeeCardInfo.forEach((value, index) => {
        if (value.cardNo === cardNo) {
          this.outsideZoneEmployeeCardInfo.splice(index, 1);
          console.log(index);
        }
      });
    }
  }
  getEmployee(): Card[] {
    return this.outsideZoneEmployeeCardInfo;
  }
}
