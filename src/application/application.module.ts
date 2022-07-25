import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PersistanceModule } from 'src/infrastructure/persistance/persistance.module';
import { ListAlbumsQueryHandler } from './queryHandlers/ListAlbumsQueryHandler';

export const QueryHandlers = [ ListAlbumsQueryHandler ]

@Module({
    imports: [CqrsModule, PersistanceModule],
    providers: [...QueryHandlers]
})
export class ApplicationModule {}
