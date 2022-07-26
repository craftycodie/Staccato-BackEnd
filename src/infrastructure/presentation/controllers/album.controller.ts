import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import ILogger, { ILoggerSymbol } from '../../../ILogger';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ListAlbumsQuery } from 'src/application/queries/ListAlbumsQuery';
import { DeleteAlbumCommand } from 'src/application/commands/DeleteAlbumCommand';
import AlbumId from 'src/domain/value-objects/AlbumId';
import CreateAlbumRequest from '../requests/CreateAlbumRequest';
import { CreateAlbumCommand } from 'src/application/commands/CreateAlbumCommand';

@Controller('/api/albums')
export class AlbumController {
  constructor(
    @Inject(ILoggerSymbol) private readonly logger: ILogger,
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  async getAlbums() {
    return await this.queryBus.execute(new ListAlbumsQuery(10));
  }

  @Delete(':id')
  async deleteAlbum(@Param('id') id: string) {
    await this.commandBus.execute(new DeleteAlbumCommand(new AlbumId(id)));
  }

  @Post()
  async createAlbum(@Body() createAlbumRequest: CreateAlbumRequest) {
    await this.commandBus.execute(new CreateAlbumCommand(createAlbumRequest.name))
  }
}
