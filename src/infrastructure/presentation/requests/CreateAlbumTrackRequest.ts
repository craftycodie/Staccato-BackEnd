import { ApiProperty } from '@nestjs/swagger';

export default class CreateAlbumTrackRequest {
  @ApiProperty()
  name: string;
  @ApiProperty()
  artist: string;
  @ApiProperty()
  genre: string[];
}
