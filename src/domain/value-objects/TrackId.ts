import { Uuid } from './Uuid';

export default class TrackId extends Uuid {
  static create(): TrackId {
    return super.create();
  }
}
