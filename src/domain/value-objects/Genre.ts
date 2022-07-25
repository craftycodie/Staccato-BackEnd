import { ValueObject, Result } from 'types-ddd';

interface GenreProp {
	value: string
};

export class GenreValueObject extends ValueObject<GenreProp>{
	private constructor (props: GenreProp){
		super(props);
	}

	get value (): string {
		return this.props.value.toLowerCase();
	}

	public static isValidValue (value:string): boolean {
		return value.length <= 80 && !value.includes(',');
	}

	public static create (value: string): Result<GenreValueObject>{
		
		const isValidValue = GenreValueObject.isValidValue(value);

		if(!isValidValue) {
			return Result.fail(
				'Invalid Genre. Max 80 chars', 
			);
		}

		return Result.ok(new GenreValueObject({ value: value.toLowerCase() }));
	}
}

export default GenreValueObject;