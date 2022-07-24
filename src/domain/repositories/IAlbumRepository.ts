import { UniqueEntityID } from 'types-ddd';

export interface IAlbumRepository<Aggregate, Model> {
	save: (target: Aggregate) => Promise<void>
	findById: (id: UniqueEntityID) => Promise<Aggregate | null>
	findByTrackId: (id: UniqueEntityID) => Promise<Aggregate | null>
}

export default IAlbumRepository;