import { Controller, Get, Inject } from '@nestjs/common';
import ILogger, { ILoggerSymbol } from '../../../ILogger';

@Controller()
export class AlbumController {
  constructor(
    @Inject(ILoggerSymbol) private readonly logger: ILogger
  ) {}

  @Get()
  getHello(): string {
    this.logger.debug("Hit Conteoller.")
    return "Hello, World!"
    // return this.appService.getHello();
  }
}
