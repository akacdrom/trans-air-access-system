import { Door, State } from "./Door";
export class OutsideZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    console.log("Trying to open the door of the Unload/Load zone");
    this.door.setState(this.door.loadUnloadZoneState);
  }
  doorOne() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorTwo() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
  }
  doorThree() {
    throw new Error(
      "You cannot use this door from your state!"
    ).message.toUpperCase();
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
