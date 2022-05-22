import { AirStripZone } from "../zone/AirStripZone";
import { SortingZone } from "../zone/SortingZone";
import { StorageZone } from "../zone/StorageZone";
import { LoadUnloadZone } from "../zone/LoadUnloadZone";
import { OutsideZone } from "../zone/OutsideZone";

import { Zone } from "../zone/ConcreteZone";

interface State {
  door: Door;

  doorZero();
  doorOne();
  doorTwo();
  doorThree();
  doorFour();
  doorFive();
  doorSix();
  doorSeven();
}
export class Door {
  public outsideZoneState: State;
  public loadUnloadZoneState: State;
  public sortingZoneState: State;
  public airStripZoneState: State;
  public storageZoneState: State;

  public currentState: State;

  constructor() {
    this.outsideZoneState = new OutsideZoneState(this);
    this.loadUnloadZoneState = new LoadUnloadZoneState(this);
    this.sortingZoneState = new SortingZoneState(this);
    this.airStripZoneState = new AirStripZoneState(this);
    this.storageZoneState = new StorageZoneState(this);

    this.setState(this.outsideZoneState);
  }

  setState(state: State) {
    this.currentState = state;
  }
  getCurrentState(): State {
    return this.currentState;
  }
}

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
    throw new Error("You cannot use this door from you state");
  }
  doorTwo() {
    throw new Error("You cannot use this door from you state");
  }
  doorThree() {
    throw new Error("You cannot use this door from you state");
  }
  doorFour() {
    throw new Error("You cannot use this door from you state");
  }
  doorFive() {
    throw new Error("You cannot use this door from you state");
  }
  doorSix() {
    throw new Error("You cannot use this door from you state");
  }
  doorSeven() {
    throw new Error("You cannot use this door from you state");
  }
}
export class LoadUnloadZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    throw new Error("You cannot use this door from you state");
  }
  doorOne() {
    console.log("Trying to open the door of the Outside zone");
    this.door.setState(this.door.outsideZoneState);
  }
  doorTwo() {
    throw new Error("You cannot use this door from you state");
  }
  doorThree() {
    console.log("Trying to open the door of the Sorting zone");
    this.door.setState(this.door.sortingZoneState);
  }
  doorFour() {
    throw new Error("You cannot use this door from you state");
  }
  doorFive() {
    throw new Error("You cannot use this door from you state");
  }
  doorSix() {
    throw new Error("You cannot use this door from you state");
  }
  doorSeven() {
    throw new Error("You cannot use this door from you state");
  }
}

export class SortingZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    throw new Error("You cannot use this door from you state");
  }
  doorOne() {
    throw new Error("You cannot use this door from you state");
  }
  doorTwo() {
    console.log("Trying to open the door of the Unload/Load zone");
    this.door.setState(this.door.loadUnloadZoneState);
  }
  doorThree() {
    throw new Error("You cannot use this door from you state");
  }
  doorFour() {
    throw new Error("You cannot use this door from you state");
  }
  doorFive() {
    console.log("Trying to open the door of the Air-Strip zone");
    this.door.setState(this.door.airStripZoneState);
  }
  doorSix() {
    console.log("Trying to open the door of the Storage zone");
    this.door.setState(this.door.storageZoneState);
  }
  doorSeven() {
    throw new Error("You cannot use this door from you state");
  }
}

export class AirStripZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    throw new Error("You cannot use this door from you state");
  }
  doorOne() {
    throw new Error("You cannot use this door from you state");
  }
  doorTwo() {
    throw new Error("You cannot use this door from you state");
  }
  doorThree() {
    throw new Error("You cannot use this door from you state");
  }
  doorFour() {
    console.log("Trying to open the door of the Sorting zone");
    this.door.setState(this.door.sortingZoneState);
  }
  doorFive() {
    throw new Error("You cannot use this door from you state");
  }
  doorSix() {
    throw new Error("You cannot use this door from you state");
  }
  doorSeven() {
    throw new Error("You cannot use this door from you state");
  }
}

export class StorageZoneState implements State {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  doorZero() {
    throw new Error("You cannot use this door from you state");
  }
  doorOne() {
    throw new Error("You cannot use this door from you state");
  }
  doorTwo() {
    throw new Error("You cannot use this door from you state");
  }
  doorThree() {
    throw new Error("You cannot use this door from you state");
  }
  doorFour() {
    throw new Error("You cannot use this door from you state");
  }
  doorFive() {
    throw new Error("You cannot use this door from you state");
  }
  doorSix() {
    throw new Error("You cannot use this door from you state");
  }
  doorSeven() {
    console.log("Trying to open the door of the Sorting zone");
    this.door.setState(this.door.sortingZoneState);
  }
}
