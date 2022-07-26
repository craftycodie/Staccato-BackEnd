import { Uuid } from './Uuid';

export default class AlbumId extends Uuid {
  static create(): AlbumId {
    return super.create();
  }
}
