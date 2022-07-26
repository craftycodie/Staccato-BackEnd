import { ApiProperty } from '@nestjs/swagger';

export default class UpdateAlbumTrackRequest {
  @ApiProperty()
  name: string;
  @ApiProperty()
  artist: string;
  @ApiProperty()
  genre: string[];
}
