import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configSchema } from './config.schema';
import { DbModule } from './db/db.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ConfigModule.forRoot(configSchema), DbModule, ItemsModule],
})
export class AppModule {}
