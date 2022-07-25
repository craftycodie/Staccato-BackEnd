import Track, { TrackProps } from "../entities/Track";

import AlbumId from "../value-objects/AlbumId";
import TrackId from "../value-objects/TrackId";

interface AlbumProps {
	id: AlbumId;

    name: string;
    tracks: Track[];

	deleted: boolean;
}

export default class Album implements AlbumProps {
	public constructor (props: AlbumProps) {
		Object.assign(this, props);
	}

	// TODO: Give these private setters.
	public id: AlbumId;

    public name: string;
    public tracks: Track[];

	public deleted: boolean;

	addTrack (track: Track): void {
		this.tracks.push(track);
	}

	delete (): void {
		this.deleted = true;
	}

	deleteTracks (trackIds: TrackId[]): void {
		var matchingTracks = this.tracks.filter(track => trackIds.includes(track.id));

		// if (matchingTracks.length != trackIds.length) {
		// 				return Result.fail(
		// 		'Invalid Genre. Max 80 chars', 
		// 	);
		// }

		matchingTracks.forEach(track => {
			track.delete();
		});
	}

	updateTrack (trackId: TrackId, updatedTrackMetadata: Partial<TrackProps>): void {
		var track = this.tracks.filter(track => track.id === trackId)[0];

		track.updateMetadata(updatedTrackMetadata);
	}

	public static create (props: AlbumProps): Album {
		return new Album({...props, id: AlbumId.create()});
	}
}