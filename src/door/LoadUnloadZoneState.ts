import { Door, State } from "./Door";

export class LoadUnloadZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorOne() {
    console.log("Trying to open the door of the Outside zone");
    this.door.setState(this.door.outsideZoneState);
  }
  doorTwo() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorThree() {
    console.log("Trying to open the door of the Sorting zone");
    this.door.setState(this.door.sortingZoneState);
  }
  doorFour() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorFive() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorSix() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorSeven() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
}
