import { BaseDomainEntity, Entity } from "types-ddd";

export interface TrackMetadata {
    name: string;
    artist: string;
    genre: string[];
}

export interface TrackProps extends BaseDomainEntity, TrackMetadata {
    deleted: boolean;
}

export default class Track extends Entity<TrackProps> {
    private constructor(props: TrackProps) {
        super(props, Track.name)
    }

    get name (): string {
        return this.props.name;
    }

    get artist (): string {
        return this.props.artist;
    }

    get genre (): string[] {
        return this.props.genre;
    }

    updateMetadata (metadata: Partial<TrackMetadata>): void {
        if (metadata.artist != undefined)
            this.props.artist = metadata.artist;
        if (metadata.name != undefined)
            this.props.name = metadata.name;
        if (metadata.genre != undefined)
            this.props.genre = metadata.genre;
    }

    delete (): void {
        this.props.deleted = true;
    }
}