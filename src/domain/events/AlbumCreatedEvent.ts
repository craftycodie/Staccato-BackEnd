import { UniqueEntityID, IDomainEvent } from 'types-ddd';

export default class AlbumCreatedEvent implements IDomainEvent {
	public dateTimeOccurred: Date;
	public albumId: UniqueEntityID;
    public name: string;

	constructor (
		albumId: UniqueEntityID,
        name: string
	){
		this.albumId = albumId;
        this.name = name;
		this.dateTimeOccurred = new Date();
	}

	getAggregateId (): UniqueEntityID {
		return this.albumId;
	}
}