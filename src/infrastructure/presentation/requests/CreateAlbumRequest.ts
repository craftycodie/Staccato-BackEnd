import { ApiProperty } from '@nestjs/swagger';
import CreateAlbumTrackRequest from './CreateAlbumTrackRequest';

export default class CreateAlbumRequest {
  @ApiProperty()
  name: string;

  @ApiProperty()
  tracks?: CreateAlbumTrackRequest[];
}
