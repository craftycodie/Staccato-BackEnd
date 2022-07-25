import { TinyTypeOf } from 'tiny-types';

export default class Genre extends TinyTypeOf<string>() {

	public static isValidValue (value:string): boolean {
		return value.length <= 80 && !value.includes(',');
	}

	public static create (value: string): Genre{
		const isValidValue = Genre.isValidValue(value);

        if (!isValidValue) {
		    throw new Error(`Invalid genre string ${value}.`)
        }

        return new Genre(value);
	}
}