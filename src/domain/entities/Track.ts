import GenreValueObject from "../value-objects/Genre";
import TrackId from "../value-objects/TrackId";

export interface TrackProps {
    id: TrackId;

    name: string;
    artist: string;
    genre: GenreValueObject[];

    deleted: boolean;
}

export default class Track implements TrackProps {
    public constructor(props: TrackProps) {
        Object.assign(this, props)
    }

    id: TrackId;

    name: string;
    artist: string;
    genre: GenreValueObject[];

    deleted: boolean;

    updateMetadata (metadata: Partial<Omit<TrackProps, 'id' | 'deleted'>>): void {
        Object.assign(this, metadata)
    }

    delete (): void {
        this.deleted = true;
    }

    static create (props: Omit<TrackProps, 'id'>): Track {
        return new Track({...props, id: TrackId.create()})
    }
}