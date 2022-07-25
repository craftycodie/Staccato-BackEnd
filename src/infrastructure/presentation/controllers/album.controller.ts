import { Controller, Get, Inject } from '@nestjs/common';
import ILogger, { ILoggerSymbol } from '../../../ILogger';
import { QueryBus } from '@nestjs/cqrs';
import { ListAlbumsQuery } from 'src/application/queries/ListAlbumsQuery';

@Controller()
export class AlbumController {
  constructor(
    @Inject(ILoggerSymbol) private readonly logger: ILogger,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async getHello() {
    this.logger.debug("Hit Controller.")
    const res = await this.queryBus.execute(new ListAlbumsQuery(10));
    return res
  }
}
