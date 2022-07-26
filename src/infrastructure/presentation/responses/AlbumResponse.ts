import TrackResponse from './TrackResponse';

export default interface AlbumResponse {
  id: string;
  name: string;
  tracks: TrackResponse[];
}
