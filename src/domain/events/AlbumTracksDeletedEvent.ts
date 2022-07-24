import { UniqueEntityID, IDomainEvent } from 'types-ddd';

export default class AlbumTracksDeletedEvent implements IDomainEvent {
	public dateTimeOccurred: Date;
	public albumId: UniqueEntityID;
	public trackIds: UniqueEntityID[];

	constructor (
		albumId: UniqueEntityID,
		trackIds: UniqueEntityID[]
	){
		this.albumId = albumId;
		this.trackIds = trackIds;
		this.dateTimeOccurred = new Date();
	}

	getAggregateId (): UniqueEntityID {
		return this.albumId;
	}
}