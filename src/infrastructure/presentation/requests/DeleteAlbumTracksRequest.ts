import { ApiProperty } from '@nestjs/swagger';

export default class DeleteAlbumTracksRequest {
  @ApiProperty()
  trackIds: string[];
}
