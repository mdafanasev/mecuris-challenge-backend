import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configSchema } from './config.schema';
import { DbModule } from './db.module';
import { ItemsModule } from './items/items.module';
import { StaticModule } from './static.module';

@Module({
  imports: [
    ConfigModule.forRoot(configSchema),
    DbModule,
    StaticModule,
    ItemsModule,
  ],
})
export class AppModule {}
