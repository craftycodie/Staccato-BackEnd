import { UniqueEntityID, IDomainEvent } from 'types-ddd';

export default class AlbumDeletedEvent implements IDomainEvent {
	public dateTimeOccurred: Date;
	public albumId: UniqueEntityID;

	constructor (
		albumId: UniqueEntityID,
	){
		this.albumId = albumId;
		this.dateTimeOccurred = new Date();
	}

	getAggregateId (): UniqueEntityID {
		return this.albumId;
	}
}