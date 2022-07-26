import Track, { TrackProps } from '../entities/Track';

import AlbumId from '../value-objects/AlbumId';
import TrackId from '../value-objects/TrackId';

interface AlbumProps {
  id: AlbumId;

  name: string;
  tracks: Track[];
}

export default class Album implements AlbumProps {
  public constructor(props: AlbumProps) {
    Object.assign(this, props);
  }

  // TODO: Give these private setters.
  public id: AlbumId;

  public name: string;
  public tracks: Track[];

  addTrack(track: Track): void {
    this.tracks.push(track);
  }

  updateTrack(
    trackId: TrackId,
    updatedTrackMetadata: Partial<TrackProps>,
  ): void {
    const track = this.tracks.filter((track) => track.id === trackId)[0];

    track.updateMetadata(updatedTrackMetadata);
  }

  public static create(props: Omit<AlbumProps, 'id'>): Album {
    return new Album({ ...props, id: AlbumId.create() });
  }
}
