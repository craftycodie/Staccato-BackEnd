import Track, { TrackMetadata } from "../entities/Track";

import { 
	AggregateRoot, 
	Result, 
	BaseDomainEntity,
	DomainId,
} from 'types-ddd';

import AlbumCreatedEvent from "../events/AlbumCreatedEvent";
import AlbumTrackAddedEvent from "../events/AlbumTrackAddedEvent";
import AlbumTracksDeletedEvent from "../events/AlbumTracksDeletedEvent";
import AlbumDeletedEvent from "../events/AlbumDeletedEvent";
import AlbumTrackUpdatedEvent from "../events/AlbumTrackUpdatedEvent";

interface AlbumProps extends BaseDomainEntity {
    name: string;
    tracks: Track[];

	deleted: boolean;
}

export default class Album extends AggregateRoot<AlbumProps> {
	private constructor (props: AlbumProps) {
		super(props, Album.name);

		this.addDomainEvent(new AlbumCreatedEvent(
			this.props.ID.value,
			this.props.name
		))
	}

	get name (): string {
		return this.props.name;
	}

	get tracks (): Track[] {
		return this.props.tracks;
	}

	addTrack (track: Track): void {
		this.props.tracks.push(track);
		
		this.addDomainEvent(new AlbumTrackAddedEvent(
			this.props.ID.value,
			track.id.value,
			track.name, 
			track.artist,
			track.genre
		))
	}

	delete (): void {
		this.props.deleted = true;

		this.addDomainEvent(new AlbumDeletedEvent(
			this.props.ID.value
		))
	}

	deleteTracks (trackIds: DomainId[]): void {
		var matchingTracks = this.props.tracks.filter(track => trackIds.includes(track.id));

		// if (matchingTracks.length != trackIds.length) {
		// 				return Result.fail(
		// 		'Invalid Genre. Max 80 chars', 
		// 	);
		// }

		matchingTracks.forEach(track => {
			track.delete();
		});

		this.addDomainEvent(new AlbumTracksDeletedEvent(
			this.props.ID.value,
			matchingTracks.map(track => track.id.value)
		))
	}

	updateTrack (trackId: DomainId, updatedTrackMetadata: Partial<TrackMetadata>): void {
		var track = this.props.tracks.filter(track => track.id === trackId)[0];

		track.updateMetadata(updatedTrackMetadata);

		this.addDomainEvent(new AlbumTrackUpdatedEvent(
			this.props.ID.value,
			track.id.value,
			track.name, 
			track.artist,
			track.genre
		))	
	}

	public static create (props: AlbumProps): Result<Album> {
		return Result.ok<Album>(new Album(props));
	}
}