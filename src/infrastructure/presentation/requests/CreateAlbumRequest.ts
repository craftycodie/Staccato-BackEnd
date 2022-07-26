import { ApiProperty } from '@nestjs/swagger';

export default class CreateAlbumRequest {
  @ApiProperty()
  name: string;
}
