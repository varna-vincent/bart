import {Deserializable} from "./../../interfaces/deserializable";

export class Station implements Deserializable {
  name: string;
  abbr: string;
  gtfs_latitude: string;
  gtfs_longitude: string;
  address: string;
  city: string;
  county: string;
  state: string;
  zipcode: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}