import { TinyTypeOf } from 'tiny-types';
import { randomUUID } from 'crypto';

export class Uuid extends TinyTypeOf<string>() {
  static create(): Uuid {
    return new Uuid(randomUUID());
  }
}
