import { UniqueEntityID, IDomainEvent } from 'types-ddd';

export default class AlbumTrackAddedEvent implements IDomainEvent {
	public dateTimeOccurred: Date;
	public albumId: UniqueEntityID;
	public trackId: UniqueEntityID;
	public trackName: string;
	public trackArtist: string;
	public trackGenre: string[];

	constructor (
		albumId: UniqueEntityID,
		trackId: UniqueEntityID,
		trackName: string,
		trackArtist: string,
		trackGenre: string[],
	){
		this.albumId = albumId;
		this.trackId = trackId;
		this.trackName = trackName;
		this.trackArtist = trackArtist;
		this.trackGenre = trackGenre;
		this.dateTimeOccurred = new Date();
	}

	getAggregateId (): UniqueEntityID {
		return this.albumId;
	}
}