import AlbumId from '../value-objects/AlbumId';
import TrackId from '../value-objects/TrackId';

export interface IAlbumRepository<Aggregate, Model> {
	save: (target: Aggregate) => Promise<void>
	findById: (id: AlbumId) => Promise<Aggregate | null>
	findByTrackId: (id: TrackId) => Promise<Aggregate | null>
	getAll: (count: number | undefined) => Promise<Aggregate[]>
}

export default IAlbumRepository;