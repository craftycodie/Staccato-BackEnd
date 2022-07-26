import GenreValueObject from '../value-objects/Genre';
import TrackId from '../value-objects/TrackId';

export interface TrackProps {
  id: TrackId;

  name: string;
  artist: string;
  genre: GenreValueObject[];
}

export default class Track implements TrackProps {
  public constructor(props: TrackProps) {
    Object.assign(this, props);
  }

  id: TrackId;

  name: string;
  artist: string;
  genre: GenreValueObject[];

  updateMetadata(metadata: Partial<Omit<TrackProps, 'id'>>): void {
    Object.assign(this, metadata);
  }

  static create(props: Omit<TrackProps, 'id'>): Track {
    return new Track({ ...props, id: TrackId.create() });
  }
}
