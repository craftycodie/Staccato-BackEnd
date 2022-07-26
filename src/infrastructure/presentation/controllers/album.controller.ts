import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import ILogger, { ILoggerSymbol } from '../../../ILogger';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ListAlbumsQuery } from 'src/application/queries/ListAlbumsQuery';
import { DeleteAlbumCommand } from 'src/application/commands/DeleteAlbumCommand';
import AlbumId from 'src/domain/value-objects/AlbumId';
import CreateAlbumRequest from '../requests/CreateAlbumRequest';
import { CreateAlbumCommand } from 'src/application/commands/CreateAlbumCommand';
import CreateAlbumTrackRequest from '../requests/CreateAlbumTrackRequest';
import { CreateAlbumTrackCommand } from 'src/application/commands/CreateAlbumTrackCommand';
import Genre from 'src/domain/value-objects/Genre';
import { DeleteAlbumTracksCommand } from 'src/application/commands/DeleteAlbumTracksCommand';
import TrackId from 'src/domain/value-objects/TrackId';
import DeleteAlbumTracksRequest from '../requests/DeleteAlbumTracksRequest';
import { UpdateAlbumTrackCommand } from 'src/application/commands/UpdateAlbumTrackCommand';
import UpdateAlbumTrackRequest from '../requests/UpdateAlbumTrackRequest';
import Album from 'src/domain/aggregates/Album';
import AlbumResponse from '../responses/AlbumResponse';

@Controller('/api/albums')
export class AlbumController {
  constructor(
    @Inject(ILoggerSymbol) private readonly logger: ILogger,
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  async getAlbums() {
    return (await this.queryBus.execute(new ListAlbumsQuery(10))).map((album) =>
      this.mapToAlbumResponse(album),
    );
  }

  @Delete(':id')
  async deleteAlbum(@Param('id') id: string) {
    await this.commandBus.execute(new DeleteAlbumCommand(new AlbumId(id)));
  }

  @Post()
  async createAlbum(@Body() createAlbumRequest: CreateAlbumRequest) {
    return this.mapToAlbumResponse(
      await this.commandBus.execute(
        new CreateAlbumCommand(createAlbumRequest.name),
      ),
    );
  }

  @Post(':id/tracks')
  async createAlbumTrack(
    @Param('id') id: string,
    @Body() createAlbumTrackRequest: CreateAlbumTrackRequest,
  ) {
    return this.mapToAlbumResponse(
      await this.commandBus.execute(
        new CreateAlbumTrackCommand(
          new AlbumId(id),
          createAlbumTrackRequest.name,
          createAlbumTrackRequest.artist,
          createAlbumTrackRequest.genre.map((genre) => new Genre(genre)),
        ),
      ),
    );
  }

  @Delete(':id/tracks/:trackId')
  async deleteAlbumTrack(
    @Param('id') id: string,
    @Param('trackId') trackId: string,
  ) {
    return this.mapToAlbumResponse(
      await this.commandBus.execute(
        new DeleteAlbumTracksCommand(new AlbumId(id), [new TrackId(trackId)]),
      ),
    );
  }

  @Put(':id/tracks/:trackId')
  async updateAlbumTrack(
    @Param('id') id: string,
    @Param('trackId') trackId: string,
    @Body() updateAlbumTrackRequest: UpdateAlbumTrackRequest,
  ) {
    return this.mapToAlbumResponse(
      await this.commandBus.execute(
        new UpdateAlbumTrackCommand(
          new AlbumId(id),
          new TrackId(trackId),
          updateAlbumTrackRequest.name,
          updateAlbumTrackRequest.artist,
          updateAlbumTrackRequest.genre.map((genre) => new Genre(genre)),
        ),
      ),
    );
  }

  // TODO: Replace with PATCH
  @Delete(':id/tracks')
  async deleteAlbumTracks(
    @Param('id') id: string,
    @Body() deleteAlbumTracksRequest: DeleteAlbumTracksRequest,
  ) {
    return this.mapToAlbumResponse(
      await this.commandBus.execute(
        new DeleteAlbumTracksCommand(
          new AlbumId(id),
          deleteAlbumTracksRequest.trackIds.map(
            (trackId) => new TrackId(trackId),
          ),
        ),
      ),
    );
  }

  private mapToAlbumResponse(album: Album): AlbumResponse {
    return {
      id: album.id.value,
      name: album.name,
      tracks: album.tracks.map((track) => {
        return {
          id: track.id.value,
          name: track.name,
          artist: track.artist,
          genre: track.genre.map((genre) => genre.value),
        };
      }),
    };
  }
}
